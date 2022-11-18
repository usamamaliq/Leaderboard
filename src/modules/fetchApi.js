
export const pushScore = async (score) => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UovbhJlpTfazETkBFdL2/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
      });
  };


  