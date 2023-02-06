const menuMobile=document.getElementById("menu-mobile")
const menu=document.getElementById("menu")
const tudo= [...document.getElementsByClassName("menuitem")]

menuMobile.addEventListener("click",()=>{
	menuMobile.classList.toggle("on")
	menu.classList.toggle("on")
})