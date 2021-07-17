import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseView from './course.view';
import CourseService from '../../services/courseService';

export const CourseContainer = () => {

    const dispatch = useDispatch();

    const defaultState = useSelector((state) => state);

    useEffect(() => {
        CourseService.loadCourses(dispatch)
    }, [dispatch])

    return <CourseView courses={defaultState} />
}