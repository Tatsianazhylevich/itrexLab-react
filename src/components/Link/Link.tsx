import { LinkStyled } from './Link.styles';

export function Link({ ...props }) {
  return <LinkStyled {...props}>{props.children}</LinkStyled>;
}
