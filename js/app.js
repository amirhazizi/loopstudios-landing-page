const menuBtn = document.querySelector("#hamburger-btn")
const closeBtn = document.querySelector("#close-btn")
const submenu = document.querySelector(".sidebar")
const links = document.querySelectorAll(".link")
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

for (const link of links) {
  link.addEventListener("mouseenter", () => {
    const underline = document.createElement("div")
    underline.setAttribute("class", "underline")
    link.appendChild(underline)
    setTimeout(() => {
      const under = link.querySelector(".underline")
      under.classList.add("underline-actived")
    }, 50)
  })
  link.addEventListener("mouseleave", () => {
    if (link.lastElementChild.classList.contains("underline"))
      link.removeChild(link.lastElementChild)
  })
}
