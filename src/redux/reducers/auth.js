import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/types";

const initialState = {
    loading: false,
    loaded: false,
    user: null,
    token: null,
    isLogin: false,
};

export default auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGOUT.SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: false,
                user: null,
                token: null,
                isLogin: false
            }
        case AUTH_LOGIN.REQUEST:
        case AUTH_LOGOUT.REQUEST:
            return {
                ...state,
                loading: true
            }
        case AUTH_LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: action.payload.user,
                token: action.payload.token,
                isLogin: true,
            }
        case AUTH_LOGIN.FAILURE:
            return {
                ...state,
                loading: false,
                loaded: true,
            }
        case AUTH_LOGIN.RESET:
            return { ...state }
        default:
            return state


    }
}