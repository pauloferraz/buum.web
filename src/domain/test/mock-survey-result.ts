import { SurveyResultModel } from '@/domain/models'
import { LoadSurveyResult } from '@/domain/usecases/load-survey-result'
import faker from 'faker'

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
