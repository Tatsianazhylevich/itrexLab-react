import { BoardCardStyled } from './BoardCard.styles';

type BoardCardProps = {
  children?: JSX.Element[] | string,
}

export function BoardCard({ children}: BoardCardProps) {
  return (
    <BoardCardStyled>
      {children}
    </BoardCardStyled>
  );
}
