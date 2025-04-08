import { UniqueEntityID } from '@/core/entities/unique-entity'
import { Answer } from '../../enterprise/entitites/answer'
import type { AnswersRepository } from '../repositories/answers-repository'
import { right, type Either } from '@/core/either'
import { AnswerAttachment } from '../../enterprise/entitites/answer-attachment'
import { AnswerAttachmentList } from '../../enterprise/entitites/answer-attachment-list'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  attachmentsIds: string[]
  content: string
}

type AnswerQuestionUseCaseResponse = Either<
  null, 
  {
    answer: Answer
  }
>

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) { }

  async execute({
    instructorId,
    questionId,
    content,
    attachmentsIds
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    const answerAttachments = attachmentsIds.map((attachmentId) => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityID(attachmentId),
        answerId: answer.id
      })
    })

    answer.attachments = new AnswerAttachmentList(answerAttachments)

    await this.answerRepository.create(answer)

    return right({
      answer
    })
  }
}
