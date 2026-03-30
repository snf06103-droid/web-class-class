document.addEventListener("DOMContentLoaded", ()=>{

    const header = document.querySelector('header')
    const currentCount = document.querySelector('#current-count')
    const rotateBox = document.querySelector(".rotate-box")
    const sections = document.querySelectorAll(".box>section")

    window.addEventListener("scroll", ()=>{
        // 스크롤바가 움직일 때 실행되는 소스코드
        let distance = window.scrollY
        currentCount.innerHTML = distance
        rotateBox.style.transform = `rotate(${distance/5}deg)`
        if(distance>=600){
            header.classList.add("on")
        }else{
            header.classList.remove("on")
        }

        sections.forEach(section=> {
            section.style.background = `url(./img/seawave.png) ${-distance/20}% 0% repeat-x`;
            
        })








    })


})


