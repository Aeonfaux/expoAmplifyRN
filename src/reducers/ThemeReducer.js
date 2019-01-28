import {
    FETCH_THEME_SUCCESS, FETCH_THEME_FAIL,
    FETCH_MODULES_SUCCESS, FETCH_MODULES_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    backgroundColor: '',
    textColor: '',
    buttonColor: '',
    modules: [],
    result: '',
    hasLoadedTheme: false,
    hasLoadedModules: false,
    message: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_THEME_SUCCESS:
            return {
                ...state,
                backgroundColor: action.payload.backgroundColor,
                textColor: action.payload.textColor,
                buttonColor: action.payload.buttonColor,
                hasLoadedTheme: true,
                result: 'SUCCESS'
            };
        case FETCH_THEME_FAIL:
            return { ...state, result: 'FAIL', message: action.payload };
        case FETCH_MODULES_SUCCESS:
            return {
                ...state,
                modules: action.payload,
                hasLoadedModules: true,
                result: 'SUCCESS'
            };
        case FETCH_MODULES_FAIL:
            return { ...state, result: 'FAIL', message: action.payload };
        default:
            return state;
    }
}

