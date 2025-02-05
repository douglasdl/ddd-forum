import { UniqueEntityID } from "@/core/entities/unique-entity";
import { Question, QuestionProps } from "@/domain/forum/enterprise/entitites/question";
import { Slug } from "@/domain/forum/enterprise/entitites/value-objects/slug";

export function makeQuestion(
  override: Partial<QuestionProps> = {}
) {
  const newQuestion = Question.create({
    authorId: new UniqueEntityID(),
    title: "Example question",
    content: 'Example content',
    ...override
  })
  return newQuestion
}