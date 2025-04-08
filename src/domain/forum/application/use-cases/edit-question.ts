import { type Either, left, right } from '@/core/either'
import type { Question } from '../../enterprise/entitites/question'
import type { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'
import type { QuestionAttachmentsRepository } from '../repositories/question-attachments-repository'
import { QuestionAttachmentList } from '../../enterprise/entitites/question-attachment-list'
import { QuestionAttachment } from '../../enterprise/entitites/question-attachment'
import { UniqueEntityID } from '@/core/entities/unique-entity'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
  attachmentsIds: string[]
}

type EditQuestionUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {
  question: Question
}>

export class EditQuestionUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private questionAttachmentRepository: QuestionAttachmentsRepository
  ) { }

  async execute({
    authorId,
    questionId,
    title,
    content,
    attachmentsIds
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)
    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    const currentQuestionAttachments = await this.questionAttachmentRepository.findManyByQuestionId(questionId)
    const questionAttachmentList = new QuestionAttachmentList(currentQuestionAttachments)

    const questionAttachments = attachmentsIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityID(attachmentId),
        questionId: question.id
      })
    })

    questionAttachmentList.update(questionAttachments)

    question.attachments = questionAttachmentList
    question.title = title
    question.content = content

    await this.questionRepository.save(question)

    return right({
      question
    })
  }
}