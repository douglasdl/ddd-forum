import { QuestionComment } from "../../enterprise/entitites/question-comment"

export interface QuestionCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>
}