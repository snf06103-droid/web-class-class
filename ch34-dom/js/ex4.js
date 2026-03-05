// document.addEventListener("DOMContentLoaded",()=>{
//     const station = document.querySelector('.station')
//     const btnNext = document.querySelector('#btn-next')
//     const train = document.querySelector('.train')
//     let count = 0
//     btnNext.addEventListener("click",()=>{
//         count++
//         if(count>2){count=0}
//         train.style.transform = `translateX${-1000*count}px`
//     })
// })



// document.addEventListener("DOMContentLoaded", () => {
//     const station = document.querySelector(".station");
//     const train = document.querySelector(".train");
//     const slides = document.querySelectorAll(".train li");
//     const btnPrev = document.querySelector("#btn-prev");
//     const btnNext = document.querySelector("#btn-next");

//     let index = 0;

//     function moveSlide() {
//         const slideWidth = station.clientWidth;
//         train.style.transform = `translateX(-${index * slideWidth}px)`;
//     }

//     btnNext.addEventListener("click", () => {
//         index = (index + 1) % slides.length; // 마지막 다음 -> 처음 //
//         // 슬라이드 개수(slides.length)로 나눈 나머지를 구함.
//         moveSlide();
//     });

//     btnPrev.addEventListener("click", () => {
//         index = (index - 1 + slides.length) % slides.length; // 처음 이전 -> 마지막
//         moveSlide();
//     });

//     window.addEventListener("resize", moveSlide);
// });

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const slides = document.querySelectorAll(".train li");
    const btnNext = document.querySelector("#btn-next");
    const btnPrev = document.querySelector("#btn-prev");

    let index = 0;
    root.style.setProperty("--slide-count", slides.length);

    function render() {
        root.style.setProperty("--slide-index", index);
    }

    btnNext.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        render();
    });

    btnPrev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        render();
    });

    render();
});
