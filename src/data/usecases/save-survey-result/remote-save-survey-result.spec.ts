import { RemoteSaveSurveyResult } from './remote-save-survey-result'
import { HttpClientSpy } from '@/data/tests'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { HttpStatusCode } from '@/data/protocols/http'
import { mockSaveSurveyResultModel, mockSurveyResultModel } from '@/domain/test'
import faker from 'faker'

type SutTypes = {
  sut: RemoteSaveSurveyResult
  httpClientSpy: HttpClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteSaveSurveyResult(url, httpClientSpy)

  return {
    sut,
    httpClientSpy
  }
}

describe('Remote Save survey list', () => {
  test('should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockSurveyResultModel()
    }

    const saveSurveyResultParams = mockSaveSurveyResultModel()
    await sut.save(saveSurveyResultParams)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('put')
    expect(httpClientSpy.body).toBe(saveSurveyResultParams)
  })

  test('should throw AccessDeniedError in HttpGetClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.save(mockSaveSurveyResultModel())
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('should throw UnexpectedError in HttpGetClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.save(mockSaveSurveyResultModel())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError in HttpGetClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.save(mockSaveSurveyResultModel())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should return a SurveyModelResult in HttpGetClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockSurveyResultModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const surveyResult = await sut.save(mockSaveSurveyResultModel())
    expect(surveyResult).toEqual(httpResult)
  })
})
