document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = e.target.q1.value;
  const result = document.getElementById("result");
  if (answer === "b") {
    result.textContent = "✅ Correct! Battery swapping replaces the battery.";
    result.className = "text-green-600 font-bold";
  } else {
    result.textContent = "❌ Incorrect. Try again!";
    result.className = "text-red-600 font-bold";
  }
});

