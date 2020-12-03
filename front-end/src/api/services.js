import axios from 'axios'

const HOST = "http://localhost:8080";

const BASEURL = HOST + "/api/urls";

const client = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  },
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
})


function getUrlsService() {
    return client.get('/');
};

function createUrlService(param) {
    return client.post('/', param);
};

function getCurrentUrlService() {
    return client.get('/{urlSlug}');
};

export { getUrlsService, createUrlService, getCurrentUrlService };