document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = questionButton.querySelector(".faq-icon");

    questionButton.addEventListener("click", () => {
      const isVisible = answer.classList.contains("show");

      // Close all other answers
      faqItems.forEach((i) => {
        i.querySelector(".faq-answer").classList.remove("show");
        i.querySelector(".faq-icon").classList.remove("open");
      });

      if (!isVisible) {
        answer.classList.add("show");
        icon.classList.add("open");
      }
    });
  });
});
