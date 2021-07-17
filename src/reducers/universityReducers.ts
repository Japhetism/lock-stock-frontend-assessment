const initialState = {
    universityList: [],
    loading: true,
    error: false,
};

const universityReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOAD_UNIVERSITY':
            return {
                ...state,
                universityList: [],
                error: false,
                loading: true
            }
        case 'GET_UNIVERSITY':
            return {
                ...state,
                universityList: action.payload,
                error: false,
                loading: false,
            }
        case 'ERROR_UNIVERSITY':
            return {
                ...state,
                universityList: [],
                error: true,
                loading: false
            }
        default:
            return state;
    }
};

export default universityReducer;