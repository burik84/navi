//TODO: this block dosen't use beacuse CORS
export const getData = async () => {
  const rawResponse = await fetch('../public/source.json', {
    method: 'GET',
  })
    .then((res) => {
      console.log(res.json());
      return res;
    })
    .catch((error) => {
      console.log('Something went wrong', error.message);
    });

  // const data = await rawResponse.json();
  return rawResponse;
};

function arrayBufferToString(arrayBuffer: any, decoderType = 'utf-8') {
  const decoder = new TextDecoder(decoderType);
  return decoder.decode(arrayBuffer);
}

export const getDataFromFile = async (event: any) => {
  // const pathFile = event.target.value;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  const result = await new Promise((res, rej) => {
    reader.onload = function (event) {
      if (event.target) {
        const content = event.target.result || '';
        res(content);
      }
    };
    reader.onerror = function () {
      console.log('Something went wrong', reader.error);
      rej(reader.error);
    };
  });
  return result;
};
