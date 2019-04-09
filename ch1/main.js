// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
let firstHeader = document.querySelector(".article__header")
firstHeader.textContent = "Welcome to the Samuel's blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
let allHeaders =  document.querySelectorAll(".article__header")

for (let i = 0; i < allHeaders.length; i++){
  allHeaders[i].classList.add('important')
}


