import { LocalUpdateCurrentAccount } from './local-update-current-account'
import { SetStorageSpy } from '@/data/tests'
import { mockAccountModel } from '@/domain/test'

type SutTypes = {
  setStorageSpy: SetStorageSpy
  sut: LocalUpdateCurrentAccount
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageSpy()
  const sut = new LocalUpdateCurrentAccount(setStorageSpy)
  return {
    setStorageSpy,
    sut
  }
}

describe('LocalUpdateAccount', () => {
  test('Should call SetStorage if correct value', async () => {
    const { sut, setStorageSpy } = makeSut()
    const account = mockAccountModel()
    await sut.save(account)
    expect(setStorageSpy.key).toBe('account')
    expect(setStorageSpy.value).toEqual(account)
  })
})
