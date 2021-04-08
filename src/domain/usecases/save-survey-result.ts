import { SurveyResultModel } from '@/domain/models'

export interface SaveSurveyResult {
  save: (params: SaveSurveyResultModel) => Promise<SurveyResultModel>
}

export type SaveSurveyResultModel = {
  answer: string
}
