const table = document.querySelector(".table-body");

const displayAllScore = (allScore) => {
  for (const score of allScore) {
    displayEachScore(score);
  }
};

const displayEachScore = async (score) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const td1 = document.createElement("td");
  td.innerHTML = `${score["user"]}`;
  td1.innerHTML = `${score["score"]}`;
  tr.appendChild(td);
  tr.appendChild(td1);
  table.appendChild(tr);
};

export { displayAllScore, displayEachScore };
