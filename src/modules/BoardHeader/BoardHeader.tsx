import {
  BoardHeaderStyled, BoardTitleStyled, CreateAnAppointmentBtn, ContainerStyled, NewAppointmentLink
} from './BoardHeader.styles';
import { messages } from 'shared';
import { USER_APPOINTMENT_PATH } from 'routes'

interface BoardHeaderProps {
  title: string,
  isBtnVisible?: boolean
}


export function BoardHeader({ title, isBtnVisible }: BoardHeaderProps) {
  return (
    <BoardHeaderStyled className="board_header card-header">
      <BoardTitleStyled>{title}</BoardTitleStyled>
      { isBtnVisible
        ? (
          <ContainerStyled>
            <div>
            <NewAppointmentLink to={USER_APPOINTMENT_PATH}>
            <CreateAnAppointmentBtn type='button'>{messages.createAnAppointment}</CreateAnAppointmentBtn>
            </NewAppointmentLink>
            </div>
          </ContainerStyled>
        )
        : null}
    </BoardHeaderStyled>
  );
}
