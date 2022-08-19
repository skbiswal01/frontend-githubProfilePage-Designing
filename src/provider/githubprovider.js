import axios from 'axios';

const URL_BASE = "https://api.github.com"

export async function getUserData(userName) {
    const response = await axios.get(`${URL_BASE}/users/${userName}`);
    return response
}


