import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, messages} from 'shared';
import {
    BoardCard, BoardHeader,
   } from 'modules';
import { DoctorsResolutionsTable } from './DoctorResolutionsTable';
import { getResolutions, doctorsResolutions, loadingForDoctorsResolutions } from 'pages/DoctorWiew/redux';
import { EmptyPage } from 'pages';
import { Spinner } from 'components';

   
export function DoctorsResolutions() {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getResolutions({offset: 0, limit: 20}));
    }, [dispatch]);
  
    const { resolutions } = useAppSelector(doctorsResolutions);
    const isLoading = useAppSelector(loadingForDoctorsResolutions);
    
    return (
    <BoardCard>
        <BoardHeader
            title={messages.userResolutionsTitle}
        />
        {!isLoading ? (resolutions.length
         ? <DoctorsResolutionsTable resolutions={resolutions} /> 
        : <EmptyPage text1={messages.emptyPageResolutionsText} />) : <Spinner />}
    </BoardCard>
    );
}