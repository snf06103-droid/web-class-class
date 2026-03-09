document.addEventListener("DOMContentLoaded",()=>{
    const clock = document.querySelector(".clock") 
    const buttonDay = document.querySelector("#day-mode") 
    const buttonNight = document.querySelector("#night-mode") 

    buttonDay.addEventListener("click",function(){
        clock.classList.add("day")
    })

    buttonNight.addEventListener("click",function(){
        clock.classList.add("night")
    })

    let arrayMonth = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    let arrayDay = ["일","월","화","수","목","금", "토"]
    const onday = document.querySelector(".onday")
    const ontime = document.querySelector(".ontime")

    function showTime(){

    }

    let now = new Date()
    let month = now.getMonth()
    let date = now.getDate()<10?:"0"+now.getDate():now.getDate()
    let day = now.getDay()
    let hour = now.getHours()<10?:"0"+now.getHours():now.getHours()
    let minute = now.getMinutes()
    let second = now.getMilliseconds()
    onday.innerHTML = '${arrayMonth[month]} ${date}일 ${arrayDay[day]}'
    ontime.innerHTML = '10:45:00'


    //오전 9시 30분~오후 6시 10분 -> 낮
    //이게 아니면 모두 밤이라고 설정해보기
    let now = new.Date()
    let hours = now.getHours()
    let minute = now.getMinutes()
    if(hours)

})