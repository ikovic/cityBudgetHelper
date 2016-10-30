import {fetchUrl} from 'fetch';

export function get(url, callback) {
    fetchUrl(url, callback);
}

export function post(url, body, callback) {
    fetchUrl(url, {
            method: 'POST',
            payload: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        },
        callback);
}

