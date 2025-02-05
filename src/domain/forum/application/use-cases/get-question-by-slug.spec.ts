import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entitites/question'
import { Slug } from '../../enterprise/entitites/value-objects/slug'
import { UniqueEntityID } from '@/core/entities/unique-entity'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase // sut = System Under Test


describe('Get Question by Slug', async () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: "Example question",
      slug: Slug.create('example-question'),
      content: 'Example content'
    })

    await inMemoryQuestionsRepository.create(newQuestion);

    const { question } = await sut.execute({
      slug: 'example-question'
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
    // expect(question.content).toEqual('Conteúdo da pergunta')
  })
})