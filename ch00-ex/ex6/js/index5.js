document.addEventListener("DOMContentLoaded",()=>{
    const btnMenu = document.querySelector(".btn-menu")
    const btnMenuClose = document.querySelector(".btn-menu-close")
    const hiddenGnb = document.querySelector(".hiddenGnb")
    btnMenu.addEventListener("click",()=>{
        hiddenGnb.classList.add("on")
    })
    btnMenuClose.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })
})