import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageSpy } from '@/data/tests/mock-storage'
import faker from 'faker'

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage if correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
