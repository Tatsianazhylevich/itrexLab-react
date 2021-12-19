
import React, { useState } from 'react';
import { MenuStyled, MenuContainerStyled, MenuLinkStyled } from './NavMenu.styles';
import { colors } from 'theme';

export type ButtonType = {
  title: string,
  id: string,
  path: string,
  exact?: boolean,
}
export type NavMenuProps = {
  buttons: ButtonType[],
}

export function NavMenu({ buttons }: NavMenuProps ) {
  // const [activeButton, setActiveButton] = useState(buttons[0].title);
  // const handleOnClick = (title: string) => {
  //   setActiveButton(title);
  // };
  return (
    <MenuStyled>
      <MenuContainerStyled>
        {
        buttons.map(({title, id, path, exact}: ButtonType) => (
          <MenuLinkStyled exact={exact} to={path} key={id} activeStyle={{
            background: colors.blue,
            color: colors.white
          }}>
            {title}
          </MenuLinkStyled>
        ))
        }
      </MenuContainerStyled>
    </MenuStyled>
  );
}
