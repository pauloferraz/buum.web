import { SetStorage } from '@/data/protocols/cache/set-storage'
import { SaveAccessToken } from '@/domain/usecases/save-access-token'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor(private readonly SetSorage: SetStorage) {}

  async save(accessToken: string): Promise<void> {
    await this.SetSorage.set('accessToken', accessToken)
  }
}
