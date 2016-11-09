import {fetchUrl} from 'fetch';
import store from '../redux/store';
import {stringify} from 'query-string';

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

export function get(url, queryParams, callback) {
    if (queryParams) {
        url = url + '?' + stringify(queryParams);
    }
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

