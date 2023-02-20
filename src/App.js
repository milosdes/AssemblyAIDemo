import { useEffect, useState } from 'react';
import './App.css';
import Audio from './audio/Audio';
import Display from './display/Display';
import Options from './options/Options';
import { menu2 as options } from './menu';
import ReactLoading from 'react-loading';

function App() {
  const ASSEMBLYAI_API_KEY = 'f9da26145e824c72bb62de98b26de5cd';
  const [transcriptText, setTranscriptText] = useState('');
  const [selection, setSelection] = useState(options.options[0]);
  const [isLoading, setIsLoading] = useState(false);

  console.log('transcript text:', transcriptText);
  console.log('env vars: ', process.env.ASSEMBLYAI_API_URL);

  return (
    <>
      <div className="flex flex-col p-2 justify-center align-center m-auto">
        <h1 className="text-4xl text-center py-2">Menu</h1>
        {!isLoading ? (
          <Options
            options={options}
            selection={selection}
            setSelection={setSelection}
            show={transcriptText.length > 0 ? false : true}
          />
        ) : (
          <div className="bg-primary-500 w-20 h-10 inline-flex p-3 m-auto justify-center -align-enter rounded-md">
            <ReactLoading type={'spin'} color={'white'} />
          </div>
        )}
        {transcriptText.length > 0 ? (
          <>
            <Display
              transcriptText={transcriptText}
              selection={options[selection]}
            />
            <button
              className="p-2 mb-2 m-auto rounded text-gray-500 bg-gray-200 font-semibold text-xs md:text-sm w-max active:bg-gray-300 transition duration-300 ease max-h-[10vh]"
              onClick={() => setTranscriptText('')}
            >
              Order Again
            </button>
          </>
        ) : null}
        <Audio
          apiKey={process.env.ASSEMBLYAI_API_URL || ASSEMBLYAI_API_KEY}
          setTranscriptText={setTranscriptText}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
}

export default App;
