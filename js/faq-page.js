const questions = document.querySelectorAll(".question-item");

questions.forEach((question) =>
  question.addEventListener("click", showContent)
);

function showContent(event) {
  event.target.closest(".question-item").classList.toggle("active");

  event.target
    .closest(".question-item")
    .querySelector(".question__content")
    .classList.toggle("active");
}
