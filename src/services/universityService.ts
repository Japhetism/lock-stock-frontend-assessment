import Communication from "./communication";
import config from '../config';

const UniversityService = {

    loadUniversities(dispatch: any) {
        dispatch({
            type: 'LOAD_UNIVERSITY',
            payload: null
        })
        Communication.getMethod(config.endpoints.universities).then(universities => {
            dispatch({
                type: 'GET_UNIVERSITY',
                payload: universities
            })
        })
        .catch(() => {
            dispatch({
                type: 'ERROR_UNIVERSITY',
                payload: null
            })
        })
        .finally(() => {

        })
    }
}

export default UniversityService;