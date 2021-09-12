const BASE_URL_API = 'http://127.0.0.1:8000/api/v1';

export const sendRequest = async (url, method, data) => {
    const response = await fetch(`${BASE_URL_API}${url}`, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    })

    const jsonResponse = await response.json();

    if (response.status !== 200 && response.status !== 201) {
        let error;
        if (jsonResponse && jsonResponse.errors) {
            error = jsonResponse.errors[0].message;
        }
        throw Error(error || 'There was an error.');
    }

    return jsonResponse.data;
}