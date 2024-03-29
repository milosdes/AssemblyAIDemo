import { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { micIcon } from '../icons';
import { assemblyApi } from '../api/assemblyApi';

export default function Audio({ apiKey, setTranscriptText, setIsLoading }) {
  //State
  const [isRecording, setIsRecording] = useState(false);

  //Api setup and functions
  const api = assemblyApi(apiKey);
  const uploadAudioFile = async (data) => {
    return await api.post('/upload', data);
  };
  const transcribeAudioFile = async (url) => {
    return await api.post('/transcript', {
      audio_url: url,
    });
  };
  const getTranscriptText = (id) => {
    const checkIfComplete = async (id) => {
      let isComplete = await api.get(`/transcript/${id}`);
      //Not complete yet
      if (
        isComplete.data.status === 'queued' ||
        isComplete.data.status === 'processing'
      ) {
        console.log('Transcription not complete yet...');
      }
      //Error
      if (isComplete.data.status === 'error') {
        console.log('There was an error transcribing your audio file');
        setIsLoading(false);
      }
      //Completed
      if (isComplete.data.status === 'completed') {
        if (typeof intervalObj !== 'undefined') clearInterval(intervalObj);
        console.log(`Transcription complete!\nText: \n${isComplete.data.text}`);
        setTranscriptText(isComplete.data.text);
        setIsLoading(false);
      }
    };
    const intervalObj = setInterval(checkIfComplete, 2000, id);
  };

  //Handlers
  const onStopClicked = async (blobUrl, blobData) => {
    setIsLoading(true);
    const response = await uploadAudioFile(blobData);
    const transcript = await transcribeAudioFile(response.data.upload_url);
    const results = await getTranscriptText(transcript.data.id);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, onStop: onStopClicked });

  const onMicClick = () => {
    setIsRecording((prev) => {
      if (!prev) {
        console.log('recording started');
        startRecording();
      } else {
        console.log('recording stopped');
        stopRecording();
      }
      return !prev;
    });
  };

  //Style
  let micContainerColor = isRecording ? 'bg-red-700' : 'bg-primary-900';
  let micContainerStyle = `p-1 w-min h-auto m-auto rounded-md hover:cursor-pointer hover:opacity-80 ${micContainerColor} hover:`;

  return (
    <div>
      <div className={`${micContainerStyle} `} onClick={onMicClick}>
        {micIcon}
      </div>
    </div>
  );
}
