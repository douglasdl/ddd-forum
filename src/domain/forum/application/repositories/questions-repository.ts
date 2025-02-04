import { Question } from "../../enterprise/entitites/question"

export interface QuestionsRepository {
  create(question: Question): Promise<void>
}