/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import { ButtonWrap } from './styles'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string
}

const Button: React.FC<Props> = ({ text, ...props }: Props) => {
  return (
    <ButtonWrap data-testid='button' onClick={props.onClick}>
      {text}
    </ButtonWrap>
  )
}

export default Button
