import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { micIcon, micIconStyle } from '../icons';
import { uploadAudioFile } from './utils';

export default function Audio() {
  //keep track of recording state
  const [isRecording, setIsRecording] = useState(false);
  const onStopClicked = async (blobUrl, blobData) => {
    console.log('stop clicked', blobData);
    const response = await uploadAudioFile(blobData);
    console.log(response.data.upload_url);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, onStop: onStopClicked });

  let micContainerColor = isRecording ? 'bg-red-700' : 'bg-green-700';
  let micContainerStyle = `p-1 w-min h-auto m-auto rounded-md hover:cursor-pointer hover:opacity-80 ${micContainerColor} hover:`;

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

  return (
    <div>
      <p>{status}</p>
      <div className={`${micContainerStyle} `} onClick={onMicClick}>
        {micIcon}
      </div>
    </div>
  );
}
