export default function Options({ options, selection, setSelection, show }) {
  //Style
  const optionsContainer = 'm-auto align-center justify-center';
  const optionsButtonsContainer = 'p-2 justify-center align-center m-auto';
  const optionsButtonsStyle =
    'inline-block px-6 mx-2 py-2.5 bg-primary-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out';
  const itemsContainer =
    'justify-center align-center m-auto flex-wrap flex w-[70%] max-h-[100vh]';
  const itemsStyle =
    'p-2 m-0.5 rounded text-gray-500 bg-gray-200 font-semibold text-xs md:text-sm w-max active:bg-gray-300 transition duration-300 ease max-h-[5vh]';

  //Mapped components
  const items = options[selection].map((item) => {
    return (
      <div key={item} className={`${itemsStyle} `}>
        {item}
      </div>
    );
  });

  const optionsButtons = options.options.map((item, index) => {
    return (
      <button
        type="button"
        key={item}
        className={`${optionsButtonsStyle}`}
        value={item}
        onClick={(e) => {
          setSelection(e.target.value);
        }}
      >
        {item}
      </button>
    );
  });

  let content = show ? (
    <div className={`${optionsContainer}`}>
      <div className={`${optionsButtonsContainer} m-auto flex`}>
        {optionsButtons}
      </div>
      <div className="min-h-[57vh]">
        <div className={`${itemsContainer}`}>{items}</div>
      </div>
    </div>
  ) : null;

  return content;
}
