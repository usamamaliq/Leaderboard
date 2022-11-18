
export const pushScore = async (score) => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UovbhJlpTfazETkBFdL2/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
      });
      getScoreCard();
  };

  export const getScoreCard = async () => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UovbhJlpTfazETkBFdL2/scores')
      .then((res) => res.json())
      .then((data) => {
        const scoreCard = data.result;
        const scoreList = document.querySelector('.scoreList');
        scoreList.innerHTML = ``;
        scoreCard.map((item) => {
           scoreList.innerHTML+= `<li> ${item.user} : ${item.score} </li>`;
        });
      });
  };
  