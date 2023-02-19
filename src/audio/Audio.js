import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { micIcon, micIconStyle } from '../icons';

export default function Audio() {
  const [isRecording, setIsRecording] = useState(false);
  const onStopClicked = (blobUrl, blobData) => {
    console.log('stop clicked', blobData);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, onStop: onStopClicked });

  let micContainerColor = isRecording ? 'bg-red-700' : 'bg-green-700';
  let micContainerStyle = `p-1 w-min h-auto m-auto rounded-md hover:cursor-pointer hover:opacity-80 ${micContainerColor} hover:`;

  let onMicClick = () => {
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
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} controls />
      <div className={`${micContainerStyle} `} onClick={onMicClick}>
        {micIcon}
      </div>
    </div>
  );
}
