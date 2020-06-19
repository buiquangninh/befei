let ngay = 19,
    gio = 23,
    phut = 46,
    giay = 50;
function TimerHandler() {
    giay--;
    if(giay == 0) {
        giay = 60;
        phut--;
    }
    if(phut == 0) {
        phut = 60;
        gio--;
    }
    if(gio == 0) {
        gio = 24;
        ngay--;
    }
    DisplayTime();
}
setInterval(TimerHandler, 1000);
let time = document.getElementById("time");
function DisplayTime() {
    if(ngay < 10) {
        ngay = "0" + ngay;
    }
    if(gio < 10) {
        gio = "0" + gio;
    }
    if(phut < 10) {
        phut = "0" + phut;
    }
    if(giay < 10) {
        giay = "0" + giay;
    }
    time.innerHTML = ngay + " : " + gio + " : " + phut + " : " + giay;
}

/*==================owl-carousel=================*/

