import { AnswerComment } from "../../enterprise/entitites/answer-comment"

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>
  create(answerComment: AnswerComment): Promise<void>
  delete(answerComment: AnswerComment): Promise<void>
}