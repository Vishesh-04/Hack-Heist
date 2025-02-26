function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("hidden", "opacity-0", "translate-y-4");
  });
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.remove("hidden");
  setTimeout(() => {
    activeSection.classList.remove("opacity-0", "translate-y-4");
    activeSection.classList.add("opacity-100", "translate-y-0");
  }, 100);
}
