export default function Display({ transcriptText, selection }) {
  //Clean up transcript
  function cleanString(string) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    return string
      .split('')
      .filter(function (letter) {
        return punctuation.indexOf(letter) === -1;
      })
      .join('')
      .toLowerCase();
  }
  const cleanTranscript = cleanString(transcriptText);

  //Styles
  const ul = 'bg-white rounded-lg border border-gray-200 w-96 text-gray-900';
  const li = 'px-6 py-2 border-b border-gray-200 w-full';
  const yourOrder =
    'bg-primary-500 rounded-t-lg px-6 py-2 border-b border-gray-200 w-full text-white text-center';
  const container = 'flex justify-center pb-2';

  //Filter out matching items between order and menu
  const selectedItems = selection.filter((item) => {
    return cleanTranscript.includes(item.toLowerCase()) ? item : null;
  });

  //Render matching items
  const renderedItems = selectedItems?.map((item) => {
    return (
      <li className={li} key={item}>
        {item}
      </li>
    );
  });

  return (
    <>
      <div className={container}>
        <ul className={ul}>
          <li className={yourOrder} key="title">
            Your order
          </li>
          {renderedItems}
        </ul>
      </div>
    </>
  );
}
