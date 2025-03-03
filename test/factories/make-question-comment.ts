import { faker } from "@faker-js/faker"
import { UniqueEntityID } from "@/core/entities/unique-entity"
import { QuestionComment, QuestionCommentProps } from "@/domain/forum/enterprise/entitites/question-comment"

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID
) {
  const questionComment = QuestionComment.create({
    authorId: new UniqueEntityID(),
    questionId: new UniqueEntityID(),
    content: faker.lorem.text(),
    ...override
  },
    id
  )
  return questionComment
}