import {
 BoardCard, BoardHeader,
} from 'modules';
import { DoctorCardList } from '..';
import { messages,} from 'shared';


export function MyAppointments() {
  return (
    <BoardCard>
        <BoardHeader
            title={messages.userViewTitle}
            isBtnVisible
        />
        <DoctorCardList />
    </BoardCard>


  );
}
