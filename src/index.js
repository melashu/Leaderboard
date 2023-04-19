import "../css/style.css";
import { addScore, getScore } from "../module/APIImp";
import { displayAllScore, displayEachScore } from "../module/UI";

const table = document.querySelector(".table-body");

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
  table.innerHTML = "";

  const result = await getScore();
  displayAllScore(result);
});

document.querySelector(".refresh").addEventListener("click", async () => {
  table.innerHTML = "";
  const result = await getScore();
  displayAllScore(result);
});

document.getElementById("close-result").addEventListener("click", () => {
  document.getElementById("result-container").style.display = "none";
});
