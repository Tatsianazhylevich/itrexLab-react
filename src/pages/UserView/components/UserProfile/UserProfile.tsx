import {
    BoardCard, BoardHeader,
} from 'modules';
import { messages,} from 'shared';
import { EmptyPage } from 'pages';
  
export function UserProfile() {
    return (
    <BoardCard>
        <BoardHeader
            title={messages.userProfileTitle}
        />
        <EmptyPage text1={messages.emptyPagePatientText} />
    </BoardCard>
    );
}
   