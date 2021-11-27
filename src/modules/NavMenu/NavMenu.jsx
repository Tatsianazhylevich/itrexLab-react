import React, { useState } from 'react';
import { StyledMenu, StyledMenuContainer, StyledMenuItem } from './NavMenu.styles';

export function NavMenu({ buttons }) {
  const [activeButton, setActiveButton] = useState(buttons[0].title);
  const handleOnClick = (title) => {
    setActiveButton(title);
  };
  return (
    <StyledMenu>
      <StyledMenuContainer>
        {
        buttons.map((button) => (
          <StyledMenuItem
            onClick={() => handleOnClick(button.title)}
            isActive={button.title === activeButton}
            key={button.id}
          >
            {button.title}
          </StyledMenuItem>
        ))
        }
      </StyledMenuContainer>
    </StyledMenu>
  );
}
