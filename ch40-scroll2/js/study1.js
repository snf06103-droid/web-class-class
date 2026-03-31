document.addEventListener("DOMContentLoaded",()=>{

    // 부드럽게 스크롤 복붙해서 쓰기 
    const btnTop = document.querySelector(".btn-top")
    btnTop.addEventListener("click",()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

    const gnb = document.querySelector(".gnb")

    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        // 스크롤바가 움직일 때 실행될 소스코드
        // pageYOffset -> 스크롤된 y에 대한 값이 저장된다.
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        // 호환성을 위해 만들어 놓은 소스코드
        
        if(scrollTop < lastScrollTop){
            console.log("마우스 휠 위로 올림")
            gnb.classList.add("on")
            btnTop.classList.add("on")
        }else{
            console.log("마우스 휠 아래로 내림")
            gnb.classList.remove("on")
            btnTop.classList.remove("on")
        }
        lastScrollTop = scrollTop

    })

})
