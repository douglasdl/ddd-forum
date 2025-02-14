import { QuestionComment } from "../../enterprise/entitites/question-comment"

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  create(questionComment: QuestionComment): Promise<void>
  delete(questionComment: QuestionComment): Promise<void>
}