document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("bg-blue-500", "active");
      btn.classList.add("bg-gray-800");
    });
    this.classList.add("bg-blue-500", "active");
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.add("hidden"));
    document.getElementById(this.dataset.target).classList.remove("hidden");
  });
});
