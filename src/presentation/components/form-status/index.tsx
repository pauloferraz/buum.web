import React, { useContext } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Context from '@/presentation/contexts/form-context'
import { Container, TextError } from './styles'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, errorMessage } = state

  return (
    <Container data-testid='status-wrap'>
      {isLoading && (
        <div data-testid='spinner'>
          <ScaleLoader color={'#ffce73'} loading={true} />
        </div>
      )}
      {errorMessage && (
        <TextError data-testid='main-error'>{errorMessage}</TextError>
      )}
    </Container>
  )
}

export default FormStatus
