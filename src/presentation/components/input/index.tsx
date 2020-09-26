import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { InputWrap, ErrorMsg } from './styles'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state?.emailError

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <InputWrap>
      <input {...props} data-testid={props.name} onChange={handleChange} />
      <ErrorMsg data-testid={`${props.name}Error`}>{error}</ErrorMsg>
    </InputWrap>
  )
}

export default Input
