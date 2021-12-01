import React, { useState } from 'react';
import { MenuStyles, MenuContainerStyles, MenuItemStyles } from './NavMenu.styles';

export function NavMenu({ buttons }) {
  const [activeButton, setActiveButton] = useState(buttons[0].title);
  const handleOnClick = (title) => {
    setActiveButton(title);
  };
  return (
    <MenuStyles>
      <MenuContainerStyles>
        {
        buttons.map((button) => (
          <MenuItemStyles
            onClick={() => handleOnClick(button.title)}
            isActive={button.title === activeButton}
            key={button.id}
          >
            {button.title}
          </MenuItemStyles>
        ))
        }
      </MenuContainerStyles>
    </MenuStyles>
  );
}
