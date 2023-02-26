// variables
const menuBtn = document.querySelector("#hamburger-btn")
const closeBtn = document.querySelector("#close-btn")
const submenu = document.querySelector(".sidebar")
const links = document.querySelectorAll(".link")
const articles = document.querySelectorAll(".article")

// scroll reveal var
let delayTime = 100

// submenu btn listeners
menuBtn.addEventListener("click", () => {
  submenu.classList.add("active")
  menuBtn.classList.add("diactive")
  closeBtn.classList.remove("diactive")
  document.body.classList.add("noscroll")
})
closeBtn.addEventListener("click", () => {
  submenu.classList.remove("active")
  menuBtn.classList.remove("diactive")
  closeBtn.classList.add("diactive")
  document.body.classList.remove("noscroll")
})

// scroll bar scroll event
window.addEventListener("scroll", () => {
  const post = window.scrollY
  const bodyHeight = document.body.getBoundingClientRect().height
  document.body.style.setProperty(
    "--width",
    `${Math.ceil((post / bodyHeight) * 100)}%`
  )
})

// underline on active elements
for (const link of links) {
  link.addEventListener("mouseenter", () => {
    const underline = document.createElement("div")
    underline.setAttribute("class", "underline")
    link.appendChild(underline)
    setTimeout(() => {
      link.querySelector(".underline").classList.add("underline-actived")
    }, 8)
  })
  link.addEventListener("mouseleave", () => {
    if (link.lastElementChild.tagName.toLowerCase() === "div") {
      if (link.lastElementChild.classList.contains("underline"))
        link.removeChild(link.lastElementChild)
    }
  })
}

// typeIt
new TypeIt("#header-text", {
  strings: "Immersive experiences that deliver",
  speed: 30,
  startDelay: 150,
}).go()

// scroll reveal
articles.forEach((article, index) => {
  delayTime += 100
  const obj = {
    delay: delayTime,
    distance: "75px",
  }
  if (index % 2 === 0) {
    ScrollReveal().reveal(article, {
      ...obj,
      origin: "left",
    })
  } else {
    ScrollReveal().reveal(article, {
      ...obj,
      origin: "right",
    })
  }
})

// set current year
document.querySelector("#footer-date").innerHTML = new Date().getFullYear()
