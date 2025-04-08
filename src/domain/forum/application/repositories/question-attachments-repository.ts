import type { QuestionAttachment } from "../../enterprise/entitites/question-attachment";

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
}