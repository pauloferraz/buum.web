import React, { useContext } from 'react'
import { SurveyContext } from '@/presentation/pages/survey-list/components'

const Error: React.FC = () => {
  const { state } = useContext(SurveyContext)

  return (
    <div data-testid='survey-error'>
      <span>{state.error}</span>
    </div>
  )
}

export default Error
