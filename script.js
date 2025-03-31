document.querySelectorAll("github").forEach((e) => {
  e.addEventListener("click", () => {
    window.open(`https://github.com/${e.textContent}`);
  });
});

document.querySelectorAll("a").forEach((e) => {
  e.setAttribute("target", "_blank");
});

document.querySelectorAll(".project").forEach((e) => {
  e.style.setProperty("--color", e.getAttribute("color"));
});
