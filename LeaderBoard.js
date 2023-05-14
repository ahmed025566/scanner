const createNewGame = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": "Ahmed'SGame"
    })
  }).then((response) => response.json())
    .then((data) => console.log(data));
};

createNewGame();
