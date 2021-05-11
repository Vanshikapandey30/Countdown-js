const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours'); 
const minE1 = document.getElementById('min');
const secE1 = document.getElementById('sec');

const newyears = '1 Jan 2022';

function countdown() {
    const nyd = new Date(newyears);
    const currentdate = new Date(); 

    const sec = (nyd - currentdate) / 1000;

    const days = Math.floor(sec / 3600 / 24);
    const hours = Math.floor(sec / 3600) % 24;
    const min = Math.floor(sec / 60) % 60;
    const seco = Math.floor(sec % 60);

    // console.log(days, hours, min, seco);


    daysE1.innerHTML = days;
    hoursE1.innerHTML = format(hours);
    minE1.innerHTML = format(min);
    secE1.innerHTML = format(seco);
}
function format(n) {
    return (n < 10) ? ("0" + n) : n;
}
//initial call
countdown();


setInterval(countdown, 1000)


