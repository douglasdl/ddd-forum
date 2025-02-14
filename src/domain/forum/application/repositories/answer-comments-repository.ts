import { AnswerComment } from "../../enterprise/entitites/answer-comment"

export interface AnswerCommentsRepository {
  create(answerComment: AnswerComment): Promise<void>
}