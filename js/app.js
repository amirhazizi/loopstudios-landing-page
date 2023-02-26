const menuBtn = document.querySelector("#hamburger-btn")
const closeBtn = document.querySelector("#close-btn")
const submenu = document.querySelector(".sidebar")

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
