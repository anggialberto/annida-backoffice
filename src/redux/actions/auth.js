import http from "../../utils/http";
import { AUTH_LOGIN, AUTH_LOGOUT } from "./types"

const authLoginRequest = () => {
    return { type: AUTH_LOGIN.REQUEST };
};

const authLoginSuccess = (data) => {
    return { type: AUTH_LOGIN.SUCCESS, payload: data };
};

const authLoginFailure = () => {
    return { type: AUTH_LOGIN.FAILURE };
};

export const authLoginReset = () => {
    return { type: AUTH_LOGIN.RESET };
};

export const authLogin = ({ username, password }, cb) => {
    return async(dispatch) => {
        dispatch(authLoginRequest);

        try {
            const response = await http.post('/api/login', {username, password});
            if(response.code === 200) {
                dispatch(authLoginSuccess(response));
            }
            if(typeof cb === Function && cb !== null && cb !== undefined) {
                cb();
            }

        } catch(e) {
            dispatch(authLoginFailure());
        }
    };
};

const authLogoutRequest = () => {
    return { type: AUTH_LOGOUT.REQUEST };
};


const authLogoutSuccess = () => {
    return { type: AUTH_LOGOUT.SUCCESS };
};

const authLogoutFailure = () => {
    return { type: AUTH_LOGOUT.FAILURE };
};

export const authLogoutReset = () => {
    return { type: AUTH_LOGOUT.RESET };
};

export const authLogout = ({ username, password }, cb) => {
    return async(dispatch) => {
        dispatch(authLoginRequest);

        try {
            const response = await http.post('/api/logout', {username, password});
            if(response.code === 200) {
                dispatch(authLogoutSuccess());
            }
            if(typeof cb === Function && cb !== null && cb !== undefined) {
                cb();
            }

        } catch(e) {
            dispatch(authLogoutFailure());
        }
    };
};