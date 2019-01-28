import axios from 'axios';
import {
    FETCH_THEME_SUCCESS, FETCH_THEME_FAIL, SERVER_ADDRESS,
    FETCH_MODULES_SUCCESS, FETCH_MODULES_FAIL
} from './types';

const ROOT_URL = SERVER_ADDRESS;
const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '0c4ffb25cb07486a8ecdcb176d5b87c1'
    }
};

export const selectEndpoint = (type) => {
    if (type === 'theme') { return '/theme'; }
    return '/modules';
};

export const selectSuccessAction = (type) => {
    if (type === 'theme') { return FETCH_THEME_SUCCESS; }
    return FETCH_MODULES_SUCCESS;
};

export const selectFailAction = (type) => {
    if (type === 'theme') { return FETCH_THEME_FAIL; }
    return FETCH_MODULES_FAIL;
};

// Retrieve Data - Theme or Module
export const fetchData = (type) => async dispatch => {
    const response = await axios.get(`${ROOT_URL}${selectEndpoint(type)}`, HEADERS);
    if (response.data.result === 'SUCCESS') {
        dispatch({
            type: selectSuccessAction(type),
            payload: response.data.body
        });
    } else {
        dispatch({
            type: selectFailAction(type),
            payload: `Failed to Retrieve ${type}`
        });
    }
};

