import axios from "axios";
const apiUrl = 'http://127.0.0.1:8000/api/';

export default {
    getHeader(tokenName) {
        const token = window.localStorage.getItem(tokenName);
        if (token) {
            return { Authorization: 'Bearer ' + token };
        }
        return {};
    },
    get(url, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.get(apiUrl + url, { headers });
    },
    post(url, data, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.post(apiUrl + url, data, { headers });
    },
}