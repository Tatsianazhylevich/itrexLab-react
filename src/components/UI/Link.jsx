import React from 'react';

export function Link({ ...props }) {
  return <a {...props}>{props.children}</a>;
}
