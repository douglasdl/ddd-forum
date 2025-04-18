import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { QuestionsRepository } from '../repositories/questions-repository'
import { QuestionComment } from '../../enterprise/entitites/question-comment'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { left, right, type Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

type CommentOnQuestionUseCaseResponse = Either<ResourceNotFoundError, {
  questionComment: QuestionComment
}>

export class CommentOnQuestionUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private questionCommentsRepository: QuestionCommentsRepository
  ) { }

  async execute({
    authorId,
    questionId,
    content
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content
    })

    await this.questionCommentsRepository.create(questionComment)

    return right({
      questionComment
    })
  }
}