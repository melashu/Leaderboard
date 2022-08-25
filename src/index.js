import "../css/style.css";
import {addScore,getScore} from "../module/APIImp";
import { displayAllScore, displayEachScore } from "../module/UI";

document
  .querySelector(".form-add-score")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector(".name").value;
    const score = document.querySelector(".score").value;

    await addScore({
      user: name,
      score: score,
    });
    displayEachScore({
      user: name,
      score: score,
    });
  });

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getScore();
  displayAllScore(result);
});

document.querySelector(".refresh").addEventListener("click", async () => {
  const table = document.querySelector(".score-table");
  table.innerHTML = "";
  const result = await getScore();
  displayAllScore(result);
});
