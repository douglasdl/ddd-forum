import { Answer } from '../../enterprise/entitites/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}