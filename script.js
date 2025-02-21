document.querySelectorAll("github").forEach(e => {
    e.addEventListener("click", () =>{
      window.open(`https://github.com/${e.textContent}`)
    })
  })
  
  document.querySelectorAll("a").forEach(e => {
    e.setAttribute("target", "_blank")
  })