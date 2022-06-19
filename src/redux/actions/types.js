import {defineAction} from 'redux-define';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';
const SHOW = 'SHOW';
const HIDE = 'HIDE';

const APP_NAME_SPACE =  defineAction('BACKOFFICE_ANNIDA');

export const AUTH_LOGIN = defineAction(
    'AUTH_LOGIN',
    [REQUEST, SUCCESS, FAILURE, RESET],
    APP_NAME_SPACE
);

export const AUTH_LOGOUT = defineAction(
    'AUTH_LOGOUT',
    [REQUEST, SUCCESS],
    APP_NAME_SPACE
);
