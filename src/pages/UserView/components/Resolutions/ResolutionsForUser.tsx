import {
    BoardCard, BoardHeader,
   } from 'modules';
import { messages,} from 'shared';
import { EmptyPage } from 'pages';

   
export function ResolutionsForUser() {
    return (
    <BoardCard>
        <BoardHeader
            title={messages.userResolutionsTitle}
        />
        <EmptyPage text1={messages.emptyPageResolutionsText} />
    </BoardCard>
    );
}