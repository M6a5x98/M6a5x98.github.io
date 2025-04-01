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
// Project <card />
const colors = ["red", "orange", "yellow", "chartreuse", "green", "blue", "aqua"].reverse()
document.querySelectorAll("card").forEach((e) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${e.getAttribute("title")}</h3>
    <ul>
      <li>Utility : ${e.getAttribute("utility")}/5</li>
      <li>Complexity : ${e.getAttribute("complexity")}/5</li>
    </ul>
  `
  card.style.setProperty("--utility-color", colors[e.getAttribute("utility")])
  e.appendChild(card);
})