import { AnswersRepository } from '../repositories/answers-repository'
import { Question } from '../../enterprise/entitites/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface ChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private answerRepository: AnswersRepository
  ) { }

  async execute({
    answerId,
    authorId
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)
    if (!answer) {
      throw new Error('Answer not found')
    }

    const question = await this.questionRepository.findById(answer.questionId.toString())
    if (!question) {
      throw new Error('Question not found')
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error('You are not the author of this question')
    }

    question.bestAnswerId = answer.id

    await this.questionRepository.save(question)

    return {
      question
    }
  }
}
