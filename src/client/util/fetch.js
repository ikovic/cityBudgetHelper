import {fetchUrl} from 'fetch';
import store from '../redux/store';


function getHeaders() {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    let token = store.getState().session.token;
    if (token) {
        headers['Authorization'] = 'JWT ' + token;
    }
    return headers;
}

export function get(url, callback) {
    fetchUrl(url, {
            method: 'GET',
            headers: getHeaders()
        },
        callback);
}

export function post(url, body, callback) {
    fetchUrl(url, {
            method: 'POST',
            payload: JSON.stringify(body),
            headers: getHeaders()
        },
        callback);
}

