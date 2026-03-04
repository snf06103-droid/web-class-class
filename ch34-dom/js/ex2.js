document.addEventListener("DOMContentLoaded",()=>{
    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnNo = document.querySelector(".btn-no")
    btnNo.addEventListener("click",()=>{
        modal.classList.add("blind")
        popup.classList.add("blind")
    })  
    modal.addEventListener("click",function(){
        this.classList.add("blind")
        popup.classList.add("blind")
    })  
})