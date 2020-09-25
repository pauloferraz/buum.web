import React from 'react'
import { InputWrap } from './styles'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return <InputWrap><input {...props}/></InputWrap>
}

export default Input
