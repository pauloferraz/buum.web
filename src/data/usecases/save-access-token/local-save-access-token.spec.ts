import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageSpy } from '@/data/tests'
import faker from 'faker'

type SutTypes = {
  setStorageSpy: SetStorageSpy
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageSpy()
  const sut = new LocalSaveAccessToken(setStorageSpy)
  return {
    setStorageSpy,
    sut
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage if correct value', async () => {
    const { sut, setStorageSpy } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
