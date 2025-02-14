import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository"
import { AnswerComment } from "@/domain/forum/enterprise/entitites/answer-comment"

export class InMemoryAnswerCommentsRepository implements AnswerCommentsRepository {
  public items: AnswerComment[] = []

  async findById(id: string) {
    const answerComment = this.items.find(item => item.id.toString() === id)

    if (!answerComment) {
      return null
    }

    return answerComment
  }

  async create(answercomment: AnswerComment) {
    this.items.push(answercomment)
  }

  async delete(answerComment: AnswerComment) {
    const itemIndex = this.items.findIndex(item => item.id === answerComment.id)
    this.items.splice(itemIndex, 1)
  }
}