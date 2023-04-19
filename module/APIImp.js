const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ci2jKI0c4Ay0PkcHKOyO/scores/";

const addScore = async (score) => {
  const result = document.getElementById("result");
  const container = document.getElementById("result-container");
  container.style.display = "flex";
  result.innerText = "Wait...";
  await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(score),
  });
  document.querySelector(".name").value = "";
  document.querySelector(".score").value = "";
  // container.style.display = "flex";
  result.innerText = "You successfully added your score!";
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
