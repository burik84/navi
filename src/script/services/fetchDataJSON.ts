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
