import { makeApiUrl } from '@/main/factories/http'
import { RemoteLoadSurveyResult } from '@/data/usecases/load-survey-result/remote-load-survey-result'
import { makeAuthorizeHttpClientDecorator } from '../../decorator'
import { LoadSurveyResult } from '@/domain/usecases/load-survey-result'

export const makeRemoteLoadSurveyResult = (id: string): LoadSurveyResult => {
  return new RemoteLoadSurveyResult(
    makeApiUrl(`/surveys/${id}/results`),
    makeAuthorizeHttpClientDecorator()
  )
}
