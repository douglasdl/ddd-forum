import { UniqueEntityID } from '@/core/entities/unique-entity'
import type { AnswersRepository } from '../repositories/answers-repository'
import { AnswerComment } from '../../enterprise/entitites/answer-comment'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { left, right, type Either } from '@/core/either'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

type CommentOnAnswerUseCaseResponse = Either<ResourceNotFoundError, {
  answerComment: AnswerComment
}>

export class CommentOnAnswerUseCase {
  constructor(
    private answerRepository: AnswersRepository,
    private answerCommentsRepository: AnswerCommentsRepository
  ) { }

  async execute({
    authorId,
    answerId,
    content
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content
    })

    await this.answerCommentsRepository.create(answerComment)

    return right({
      answerComment
    })
  }
}