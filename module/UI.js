const displayAllScore = (allScore) => {
    for (const score of allScore) {
    displayEachScore(score);
    }
};

const displayEachScore = async (score) => {
  const table = document.querySelector(".score-table");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerHTML = `${score["user"]}  ${score["score"]}`;
  tr.appendChild(td);
  table.appendChild(tr);
};

export  { displayAllScore, displayEachScore };
