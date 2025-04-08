import { UniqueEntityID } from "@/core/entities/unique-entity"
import  { QuestionAttachment, type QuestionAttachmentProps } from "@/domain/forum/enterprise/entitites/question-attachment"

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEntityID
) {
  const questionAttachment = QuestionAttachment.create({
    questionId: new UniqueEntityID(),
    attachmentId: new UniqueEntityID(),
    ...override
  },
    id
  )
  return questionAttachment
}