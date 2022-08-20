let container = document.querySelector(".clock");


setInterval(function () {
    let currentDate = new Date();

    let saat = currentDate.getHours();


    let deqiqe = currentDate.getMinutes();

    let saniye = currentDate.getSeconds();

    if (saniye < 10) {

        saniye = "0" + saniye;
    }
    if (saat < 10) {
        saat = "0" + saat;
    }
    if (deqiqe < 10) {
        deqiq = "0" + deqiqe;
    }

    let vaxt = saat + " : " + deqiqe + " : " + saniye;

    container.innerHTML = vaxt;

}, 1000)