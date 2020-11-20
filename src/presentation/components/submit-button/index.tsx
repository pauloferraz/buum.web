import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { Button } from './styles'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(Context)

  return (
    <Button type='submit' disabled={state.invalidForm} data-testid='submit-button'>
      {text}
    </Button>
  )
}

export default SubmitButton
