import axios from 'axios';
import https from 'https';

const HEADERS_OPTIONS = {
  'access-control-allow-arigin': '*',
  'content-Type': 'application/json'
};

const http = axios.create({
  baseURL: 'http://localhost:4000',
  headers: HEADERS_OPTIONS,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export { http };
export default http;
