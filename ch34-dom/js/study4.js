document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#btn1")
    const btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click",function(){
        alert("안녕하세요")
    })

    document.querySelector("#btn2")
    const btn2 = document.querySelector("#btn2");

    const box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "skyblue"
    })

    document.querySelector("#btn3")
    const btn3 = document.querySelector("#btn3");

    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "transparent"
    })

    const originFontSize = 20;
    let basicFontSize = 20;
    let minfontSize = 14;
    let maxfontSize = 26;
    const chip = document.querySelector(".chip")

    const btnSmallFont = document.querySelector("#btn-small-font");
    const btnLargeFont = document.querySelector("#btn-large-font");
    const btnFontBase = document.querySelector("#btn-font-base");
    const html = document.querySelector("html")

    btnSmallFont.addEventListener("click", function(){
        if(basicFontSize<=minfontSize){
            alert(minfontSize+"픽셀보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize -= 1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })
    btnLargeFont.addEventListener("click",function(){
        if(basicFontSize>=maxfontSize){
            alert(maxfontSize+"픽셀보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize += 1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })
    btnFontBase.addEventListener("click",function(){
        //basicFontSize = 20
        html.style.fontSize = originFontSize+"px"
        chip.innerHTML = `${originFontSize}px`
        basicFontSize = originFontSize //빼먹으면 글씨를 키우거나 줄인 후에 기본크기를 눌렀을 때 글씨가 커지거나 작아지는 문제가 발생한다.
    })
})
// DOMContentLoaded : HTML문서가 모두 로드된 후에 실행되는 이벤트
