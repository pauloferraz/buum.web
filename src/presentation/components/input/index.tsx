/* eslint-disable @typescript-eslint/indent */
import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { InputWrap, ErrorMsg } from './styles'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errorMsg?: string
  label?: string
}

const Input: React.FC<Props> = ({ errorMsg, ...props }: Props) => {
  const { state, setState } = useContext(Context)

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <InputWrap>
      <div>
        <label htmlFor={props.name}>{props.label}</label>
        <ErrorMsg data-testid={`${props.name}Error`}>{errorMsg}</ErrorMsg>
      </div>
      <input {...props} data-testid={props.name} onChange={handleChange} />
    </InputWrap>
  )
}

export default Input
