document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  setTimeout(() => {
    // document.querySelector("form").innerHTML =
    //   "<h3>Universe managing operation has been a success</h3>";
  }, 1000);
});
