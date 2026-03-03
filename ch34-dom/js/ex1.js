document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup");
    const btnClosePopup = document.querySelector(".btn-close-popup");
    const btnCloseOneday = document.querySelector(".btn-close-popup-oneday");

    btnClosePopup.addEventListener("click",()=>{
        //popup.style.display = "none";
        popup.classList.add("hide")
    }) 
    btnCloseOneday.addEventListener("click",()=>{

    })
})