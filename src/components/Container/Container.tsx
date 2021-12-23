import { ContainerStyled } from './Container.styles';

export type ContainerProps= {
  children?: JSX.Element | string,
}

export function Container({ children }: ContainerProps) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}
