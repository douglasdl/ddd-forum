import { QuestionCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository"
import { QuestionComment } from "@/domain/forum/enterprise/entitites/question-comment"

export class InMemoryQuestionCommentsRepository implements QuestionCommentsRepository {
  public items: QuestionComment[] = []

  async findById(id: string) {
    const questionComment = this.items.find(item => item.id.toString() === id)

    if (!questionComment) {
      return null
    }

    return questionComment
  }

  async create(questioncomment: QuestionComment) {
    this.items.push(questioncomment)
  }

  async delete(questionComment: QuestionComment) {
    const itemIndex = this.items.findIndex(item => item.id === questionComment.id)
    this.items.splice(itemIndex, 1)
  }
}