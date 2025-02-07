import { Answer } from '../../enterprise/entitites/answer'

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>
  save(answer: Answer): Promise<void>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}