import { Question } from '@/domain/forum/enterprise/entitites/question'
import type { QuestionsRepository } from '../repositories/questions-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity'
import { right, type Either } from '@/core/either'
import { QuestionAttachment } from '@/domain/forum/enterprise/entitites/question-attachment'

interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
  attachmentsIds: string[]
}

type CreateQuestionUseCaseResponse = Either<null, {
  question: Question
}>

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) { }

  async execute({
    authorId,
    title,
    content,
    attachmentsIds
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content
    })

    const questionAttachments = attachmentsIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityID(attachmentId),
        questionId: question.id
      })
    })

    question.attachments = questionAttachments

    await this.questionRepository.create(question)

    return right({
      question
    })
  }
}