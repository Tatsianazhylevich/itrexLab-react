import { ButtonStyled } from './Button.styles';

export type ButtonProps = {
  children?: JSX.Element | JSX.Element[] | string,
  isDisabled?: boolean,
  type: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void,
  title?: string,
  id?: string,
  isActive?: boolean,
  key?: string
}

export function Button({ isDisabled, type, children }: ButtonProps) {
  return <ButtonStyled isDisabled={isDisabled} type={type} >{children}</ButtonStyled>;
}
