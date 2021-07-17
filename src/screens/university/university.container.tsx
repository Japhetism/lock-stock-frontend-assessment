import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityView from './university.view';
import UniversityService from '../../services/universityService';

export const UniversityContainer = () => {

    const dispatch = useDispatch();

    const defaultState = useSelector((state) => state);

    useEffect(() => {
        UniversityService.loadUniversities(dispatch)
    }, [dispatch])


    return <UniversityView universities={defaultState} />
}