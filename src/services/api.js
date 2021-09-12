import { sendRequest } from 'services/sendRequest';

export const create = (url, data) => {
    return sendRequest(url, 'POST', data);
}

export const getAll = (url) => {
    return sendRequest(url, 'GET');
}

export const get = (url, id) => {
    return sendRequest(`${url}/${id}`, 'GET');
}

export const update = (url, id, data) => {
    return sendRequest(`${url}/${id}`, 'PUT', data);
}