import axios from 'axios'

const HOST = "http://localhost:8080";

const BASEURL = HOST + "/api/urls";

const client = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export function urlServices() {
    return client.get('/');
}

export function createUrls(param) {
    return client.post('/', param);
}

