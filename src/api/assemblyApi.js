import axios from 'axios';

export const assemblyApi = (apiKey) => {
  return axios.create({
    baseURL: 'https://api.assemblyai.com/v2',
    timeout: 10000,
    headers: {
      authorization: apiKey,
      // 'Transfer-Encoding': 'chunked',
    },
  });
};
