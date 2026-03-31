document.addEventListener("DOMContentLoaded",()=>{

    // 선택한 태그가 화면에 들어오고 나가는 것을 감지하여 화면에 들어오면 보이게하고 화면 밖으로 나가면 안보이게 하는 소스
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                // 태그가 화면에 들어왔을 때
                entry.target.classList.add("on")
            }else{
                // 태그가 화면밖으로 나갔을 때
                entry.target.classList.remove("on")
            }
        })
    },{
        threshold:0.3 // 태그가 화면에 30%이상 보일 때 트리거
    })
    document.querySelectorAll(".ltr,.blur").forEach(tag=>{observer.observe(tag)})
    // ()부분만 수정하면 됨

})