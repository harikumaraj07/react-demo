import futch from './api';

export const getData = (start = 0, limit = 10) => {
    const url = `http://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    return futch(url, 'GET');
}