import { assemblyApi } from '../api/assemblyApi';

const api = assemblyApi('YOUR_ASSEMBLYAI_API_KEY');

export const uploadAudioFile = async (data) => {
  return await api.post('/upload', data);
};
