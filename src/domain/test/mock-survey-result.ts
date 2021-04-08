import { SurveyResultModel } from '@/domain/models'
import {
  LoadSurveyResult,
  SaveSurveyResult,
  SaveSurveyResultModel
} from '@/domain/usecases'
import faker from 'faker'

export const mockSaveSurveyResultModel = (): SaveSurveyResultModel => ({
  answer: faker.random.word()
})

export const mockSurveyResultModel = (): SurveyResultModel => ({
  question: faker.random.words(10),
  date: faker.date.recent(),
  answers: [
    {
      image: faker.internet.url(),
      answer: faker.random.words(10),
      count: faker.random.number(),
      percent: faker.random.number(100),
      isCurrentAccountAnswer: true
    },
    {
      answer: faker.random.words(2),
      count: faker.random.number(),
      percent: faker.random.number(100),
      isCurrentAccountAnswer: false
    }
  ]
})

export class LoadSurveyResultSpy implements LoadSurveyResult {
  callsCount = 0
  surveyResult = mockSurveyResultModel()

  async load(): Promise<SurveyResultModel> {
    this.callsCount++
    return this.surveyResult
  }
}

export class SaveSurveyResultSpy implements SaveSurveyResult {
  params: SaveSurveyResultModel
  surveyResult = mockSurveyResultModel()

  async save(params: SaveSurveyResultModel): Promise<SurveyResultModel> {
    this.params = params
    return this.surveyResult
  }
}
