document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target[0].selected) {
  document.querySelector("form").innerHTML =
    "<h3>Universe managing operation has been a success</h3>";
  } else if (!e.target[0].selected) {
    alert("Destroying")
    document.querySelector("body").class="explode"
  }
});
