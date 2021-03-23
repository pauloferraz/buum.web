import React from 'react'
import { ButtonWrap } from './styles'

type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }: Props) => {
  return <ButtonWrap data-testid='button'>{text}</ButtonWrap>
}

export default Button
