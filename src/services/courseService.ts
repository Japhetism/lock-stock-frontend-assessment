import Communication from "./communication";
import config from '../config';

const CourseService = {

    loadCourses(dispatch: any) {
        dispatch({
            type: 'LOAD_COURSE',
            payload: null
        })
        Communication.getMethod(config.endpoints.courses).then(courses => {
            dispatch({
                type: 'GET_COURSE',
                payload: courses
            })
        })
        .catch(() => {
            dispatch({
                type: 'ERROR_COURSE',
                payload: null
            })
        })
        .finally(() => {

        })
    }
}

export default CourseService;