import {
  BoardHeaderStyled, BoardTitleStyled, CreateAnAppointmentBtn, ContainerStyled
} from './BoardHeader.styles';
import { messages } from 'shared';
import { USER_APPOINTMENT_PATH } from 'routes'
import { useHistory } from 'react-router-dom';

interface BoardHeaderProps {
  title: string,
  isBtnVisible?: boolean
}


export function BoardHeader({ title, isBtnVisible }: BoardHeaderProps) {
  const history = useHistory();
  const RouteTo = () => {
    history.push(USER_APPOINTMENT_PATH);
  }
  return (
    <BoardHeaderStyled className="board_header card-header">
      <BoardTitleStyled>{title}</BoardTitleStyled>
      { isBtnVisible
        ? (
          <ContainerStyled>
            <div>
            <CreateAnAppointmentBtn type='button' onClick={RouteTo}>{messages.createAnAppointment}</CreateAnAppointmentBtn>
            </div>
          </ContainerStyled>
        )
        : null}
    </BoardHeaderStyled>
  );
}
