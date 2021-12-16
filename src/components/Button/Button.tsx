import { ButtonStyled } from './Button.styles';

export type ButtonProps = {
  children?: JSX.Element | string,
  isDisabled?: boolean,
  type: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void,
  isActive?: boolean 
}

export function Button({ isDisabled, type, children }: ButtonProps) {
  return <ButtonStyled isDisabled={isDisabled} type={type} >{children}</ButtonStyled>;
}
