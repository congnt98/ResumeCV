document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-buttons button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("highlight"));
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      this.classList.add("highlight");
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
