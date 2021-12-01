import React from 'react';
import { LinkStyles } from './Link.styles';

export function Link({ ...props }) {
  return <LinkStyles {...props}>{props.children}</LinkStyles>;
}
