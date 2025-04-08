import type { QuestionAttachmentsRepository } from "@/domain/forum/application/repositories/question-attachments-repository"
import type { QuestionAttachment } from "@/domain/forum/enterprise/entitites/question-attachment"


export class InMemoryQuestionAttachmentsRepository implements QuestionAttachmentsRepository {
  public items: QuestionAttachment[] = []

  async findManyByQuestionId(questionId: string) {
    const questionAttachments = this.items
      .filter(item => item.questionId.toString() === questionId)

    return questionAttachments
  }
}