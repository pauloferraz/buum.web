import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../tests/mock-http-client'

describe('RemoteAuthentication', () => {
  test('should call httpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
