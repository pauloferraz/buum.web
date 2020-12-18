import { setCurrentAccountAdapter } from '@/main/adapters'
import { mockAccountModel } from '@/domain/test'
import { LocalStorageAdapter } from '@/infra/cache'

jest.mock('@/infra/cache/local-storage-adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')

    setCurrentAccountAdapter(account)

    expect(setSpy).toHaveBeenCalledWith('account', account)
  })
})
