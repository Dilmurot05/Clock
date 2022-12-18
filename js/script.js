const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

let date = new Date()
let secArr = date.getSeconds()*6

function clock() {
    let date = new Date()
    secArr += 0.2
    let minArr = date.getMinutes() * 6,
        hourArr = date.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000 / 30);

    hourNum.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    minNum.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
}
clock()


const tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            content[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        content[i].classList.add("active")
    })
}

const btn = document.querySelector('.stopwatch__btn'),
    watchSec = document.querySelector('.stopwatch__seconds'),
    watchMin = document.querySelector('.stopwatch__minutes'),
    watchHour = document.querySelector('.stopwatch__hours'),
    span =document.querySelector('.tabsLink__span');

btn.addEventListener("click", () => {
    if (btn.innerHTML == "start") {
        btn.innerHTML = "stop"
        span.classList.add("active")
    } else if (btn.innerHTML == "stop") {
        btn.innerHTML = "clear"
        span.classList.add("active_clear")
    } else if (btn.innerHTML == "clear") {
        btn.innerHTML = "start"
        span.classList.remove("active")
        span.classList.remove("active_clear")
        watchSec.innerHTML = 0
        watchMin.innerHTML = 0
        watchHour.innerHTML = 0
    }
})
function watch() {
    if (btn.innerHTML == "stop") {
        watchSec.innerHTML++
        if (watchSec.innerHTML > 59) {
            watchSec.innerHTML = 0
            watchMin.innerHTML++
            if (watchMin.innerHTML > 59) {
                watchHour.innerHTML++
                watchMin.innerHTML = 0
            }
        }
    }
    setTimeout(() => {
        watch()
    }, 1000);
}
watch()
