  const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u7kNvsXmXdu1EXfOu2CH/scores/";

  const addScore = async (score) => {
    await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });
  };

  const getScore = async () => {
    let allScore;
    try {
      const result = await fetch(`${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const scores = await result.json();
      allScore = scores["result"];
    } catch (error) {
      allScore = [];
    }
    return allScore;
  };
export { addScore, getScore };