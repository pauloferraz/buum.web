import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSurveyModel = (): SurveyModel[] => [
  {
    id: faker.random.uuid(),
    question: faker.random.words(10),
    answers: [{ answer: faker.random.words(4) }, { answer: faker.random.words(6) }],
    didAnswer: faker.random.boolean(),
    date: faker.date.recent()
  }
]
