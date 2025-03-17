import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { EditAnswerUseCase } from './edit-answer'
import { UniqueEntityID } from '@/core/entities/unique-entity'
import { NotAllowedError } from './errors/not-allowed-error'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase // sut = System Under Test

describe('Edit Answer', async () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new EditAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able to edit an answer', async () => {
    const newAnswer = makeAnswer({
      authorId: new UniqueEntityID('author-1')
    }, new UniqueEntityID('answer-1'));

    await inMemoryAnswersRepository.create(newAnswer);

    await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-1',
      content: 'Conteúdo teste',
    })

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: 'Conteúdo teste'
    })
  })

  it('should not be able to edit an answer from another user', async () => {
    const newAnswer = makeAnswer({
      authorId: new UniqueEntityID('author-1')
    }, new UniqueEntityID('answer-1'));

    await inMemoryAnswersRepository.create(newAnswer);

    const result = await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-2',
      content: 'Conteúdo teste',
    })

    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(NotAllowedError)
  })
})