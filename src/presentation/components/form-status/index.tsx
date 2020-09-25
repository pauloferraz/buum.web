import React, { useContext } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Context from '@/presentation/contexts/form-context'
import { Container, TextError } from './styles'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return <Container data-testid="status-wrap">
    { isLoading && <ScaleLoader
      color={'#ffce73'}
      loading={true}
    />}
    {errorMessage && <TextError>{errorMessage}</TextError>}
  </Container>
}

export default FormStatus
