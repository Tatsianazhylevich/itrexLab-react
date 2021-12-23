import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, messages} from 'shared';
import {
    BoardCard, BoardHeader,
   } from 'modules';
import { PatientResolutionsTable } from './PatientResolutionsTable';
import { getPatientResolutions, patientResolutions, loadingForResolutions } from '../../redux';
import { EmptyPage } from 'pages';
import { Spinner } from 'components';

   
export function PatientResolutions() {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getPatientResolutions({offset: 0, limit: 20}));
    }, [dispatch]);
  
    const { resolutions } = useAppSelector(patientResolutions);
    const isLoading = useAppSelector(loadingForResolutions);
    
    return (
    <BoardCard>
        <BoardHeader
            title={messages.userResolutionsTitle}
        />
        {!isLoading ? (resolutions.length 
        ? <PatientResolutionsTable resolutions={resolutions} /> 
        : <EmptyPage text1={messages.emptyPageResolutionsText} />) : <Spinner />}
    </BoardCard>
    );
}