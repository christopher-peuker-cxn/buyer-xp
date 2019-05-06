import getConfig from 'next/config';
const { API_URL } = getConfig().publicRuntimeConfig;

export default API_URL;