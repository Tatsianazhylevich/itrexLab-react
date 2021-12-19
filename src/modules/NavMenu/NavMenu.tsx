import { Button } from 'components';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuStyled, MenuContainerStyled, MenuItemStyled, MenuLinkStyled } from './NavMenu.styles';

export type ButtonType = {
  title: string,
  id: string,
  path: string,
  key?: string
}
export type NavMenuProps = {
  buttons: ButtonType[],
}

export function NavMenu({ buttons }: NavMenuProps ) {
  const [activeButton, setActiveButton] = useState(buttons[0].title);
  const handleOnClick = (title: string) => {
    setActiveButton(title);
  };
  return (
    <MenuStyled>
      <MenuContainerStyled>
        {
        buttons.map(({title, id, path}: ButtonType) => (
          <MenuLinkStyled to={path} key={id}>
            <MenuItemStyled
              key={id}
            >
              {title}
            </MenuItemStyled>
          </MenuLinkStyled>
        ))
        }
      </MenuContainerStyled>
    </MenuStyled>
  );
}
