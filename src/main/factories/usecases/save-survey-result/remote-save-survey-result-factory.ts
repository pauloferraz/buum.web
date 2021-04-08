import { makeApiUrl } from '@/main/factories/http'
import { RemoteSaveSurveyResult } from '@/data/usecases/save-survey-result/remote-save-survey-result'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorator'
import { SaveSurveyResult } from '@/domain/usecases'

export const makeRemoteSaveSurveyResult = (id: string): SaveSurveyResult => {
  return new RemoteSaveSurveyResult(
    makeApiUrl(`/surveys/${id}/results`),
    makeAuthorizeHttpClientDecorator()
  )
}
