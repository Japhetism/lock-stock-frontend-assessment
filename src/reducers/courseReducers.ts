const initialState = {
    courseList: [],
    loading: true,
    error: false,
};

const courseReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOAD_COURSE':
            return {
                ...state,
                courseList: [],
                error: false,
                loading: true
            }
        case 'GET_COURSE':
            return {
                ...state,
                courseList: action.payload,
                error: false,
                loading: false,
            }
        case 'ERROR_COURSE':
            return {
                ...state,
                courseList: [],
                error: true,
                loading: false
            }
        default:
            return state;
    }
};

export default courseReducer;