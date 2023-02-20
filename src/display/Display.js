export default function Display({ transcriptText, selection }) {
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

  console.log(cleanTranscript);

  const selectedItems = selection.filter((item) => {
    return cleanTranscript.includes(item.toLowerCase()) ? item : null;
  });

  const renderedItems = selectedItems?.map((item) => {
    return (
      <li className="px-6 py-2 border-b border-gray-200 w-full" key={item}>
        {item}
      </li>
    );
  });

  // const order = demoTranscript.split(' ').filter((word) => word in menu);
  console.log('order: ', selectedItems);
  return (
    <>
      <div className="flex justify-center pb-2">
        <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          <li
            className="bg-primary-500 rounded-t-lg px-6 py-2 border-b border-gray-200 w-full text-white text-center"
            key="title"
          >
            Your order
          </li>
          {renderedItems}
        </ul>
      </div>
    </>
  );
}
