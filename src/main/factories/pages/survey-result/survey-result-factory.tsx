import React from 'react'
import {
  makeRemoteLoadSurveyResult,
  makeRemoteSaveSurveyResult
} from '@/main/factories/usecases'
import SurveyResult from '@/presentation/pages/survey-result'
import { useParams } from 'react-router-dom'

export const makeSurveyResult: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <SurveyResult
      loadSurveyResult={makeRemoteLoadSurveyResult(id)}
      saveSurveyResult={makeRemoteSaveSurveyResult(id)}
    />
  )
}
