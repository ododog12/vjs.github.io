const clock  = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);
}

//1초 후에 실행되므로 한번 실행해주고 setInterval
getClock();
setInterval(getClock, 1000);
