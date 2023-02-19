import { useState } from 'react';
import './App.css';
import Audio from './audio/Audio';
import Display from './display/Display';
import Options from './options/Options';
import { menu as options } from './menu';

function App() {
  const ASSEMBLY_API_KEY = 'f9da26145e824c72bb62de98b26de5cd';
  const [transcriptText, setTranscriptText] = useState('Initial text');

  console.log('transcript text:', transcriptText);

  return (
    <>
      <Options options={options} />
      <Audio apiKey={ASSEMBLY_API_KEY} setTranscriptText={setTranscriptText} />
      <Display transcriptText={transcriptText} />
    </>
  );
}

export default App;
