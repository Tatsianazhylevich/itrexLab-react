import {
    BoardCard, BoardHeader,
   } from 'modules';
   import { PatientCardList } from '..';
   import { messages,} from 'shared';
   
   export function Patients() {
     return (
        <BoardCard>
        <BoardHeader title={messages.doctorViewTitle} />
        <PatientCardList />
      </BoardCard>
     );
   }
   