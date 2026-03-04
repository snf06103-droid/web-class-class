document.addEventListener("DOMContentLoaded",()=>{
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>Section")

    tabs.forEach((span,i)=>{
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            //일단 3개의 span태그에 있는 active라는 클래스를 다 지운다
            span.classList.add("active")
            //내가 클릭한 span태그만 active라는 클래스가 추가됨
            tabDescriptions.forEach(section=>section.classList.remove("active"))
            tabDescriptions[i].classList.add("active")
        })
    })
    let fruits = ["사과","바나나","수박"]
    fruits.forEach(function(fruit,i){
        console.log(fruit)
        console.log(i)
    })
})



