import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQxZjk0MTBhMzBiYjIxNGQzYTZiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjA4NjgyNSwiZXhwIjoxNjYyMzQ2MDI1fQ.FTlye4CUIt5UYqmtWde7LFtvo9EGY2QtNrbIqkQ1SaA';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});