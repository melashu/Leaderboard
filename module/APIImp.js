export default class leaderboardAPI {
  static url =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u7kNvsXmXdu1EXfOu2CH/scores/";

  static addScore = async (score) => {
    await fetch(`${this.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });
  };

  static getScore = async () => {
    let allScore;
    try {
      const result = await fetch(`${this.url}`, {
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
}
