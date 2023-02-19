import { useReactMediaRecorder } from 'react-media-recorder';

export default function Audio() {
  const onStopClicked = (blobUrl, blobData) => {
    console.log('stop clicked', blobData);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, onStop: onStopClicked });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} controls />
    </div>
  );
}
