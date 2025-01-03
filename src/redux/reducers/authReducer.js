import * as types from '../actionsTypes/authActionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case types.SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
