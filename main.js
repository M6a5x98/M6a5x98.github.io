document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("form").innerHTML =
    "<h3>Universe managing operation has been a success</h3>";
});
