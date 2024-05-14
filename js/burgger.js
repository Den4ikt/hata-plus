const burgger = document.querySelector(".burgger")
const menu = document.querySelector(".main_buttons")

burgger.onclick = () => {
    menu.classList.toggle("menu_open")
    burgger.classList.toggle("burgger_cross")
}