import React, { useState } from 'react';
import { MenuStyled, MenuContainerStyled, MenuItemStyled } from './NavMenu.styles';

export type NavMenuProps = {
  buttons: 
}

export function NavMenu({ buttons }) {
  const [activeButton, setActiveButton] = useState(buttons[0].title);
  const handleOnClick = (title) => {
    setActiveButton(title);
  };
  return (
    <MenuStyled>
      <MenuContainerStyled>
        {
        buttons.map((button) => (
          <MenuItemStyled
            onClick={() => handleOnClick(button.title)}
            isActive={button.title === activeButton}
            key={button.id}
          >
            {button.title}
          </MenuItemStyled>
        ))
        }
      </MenuContainerStyled>
    </MenuStyled>
  );
}
