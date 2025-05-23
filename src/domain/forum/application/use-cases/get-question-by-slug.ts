import { type Either, left, right } from '@/core/either'
import type { Question } from '../../enterprise/entitites/question'
import type { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<ResourceNotFoundError, {
  question: Question
}>

export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: QuestionsRepository) { }

  async execute({
    slug
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionRepository.findBySlug(slug)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question
    })
  }
}