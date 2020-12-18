import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'
import { Button } from './styles'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(FormContext)

  return (
    <Button type='submit' disabled={state.invalidForm} data-testid='submit-button'>
      {text}
    </Button>
  )
}

export default SubmitButton
