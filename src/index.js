import "../css/style.css";
import leaderboardAPI from "../module/APIImp";
import { displayAllScore, displayEachScore } from "../module/UI";


document
  .querySelector(".form-add-score")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector(".name").value;
    const score = document.querySelector(".score").value;

    await leaderboardAPI.addScore({
      user: name,
      score: score,
    });
    displayEachScore({
      user: name,
      score: score,
    });
  });

document.addEventListener("DOMContentLoaded", async (e) => {
  const result = await leaderboardAPI.getScore();
  displayAllScore(result);
});

document.querySelector(".refresh").addEventListener("click", async (e) => {
  const table = document.querySelector(".score-table");
  table.innerHTML = '';
  const result = await leaderboardAPI.getScore();
  displayAllScore(result);
});
