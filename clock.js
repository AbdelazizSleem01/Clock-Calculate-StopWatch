// clock
function show() {
    var d = new Date();

    var hours = d.getHours();
    var minut = d.getMinutes();
    var Seconds = d.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';


    minut = (minut < 10) ? "0" + minut : minut;
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
    hours = (hours > 12) ? hours - "12" : hours;


    var time = `${hours} : ${minut} : ${Seconds} ${ampm}`

    setTimeout(show, 1000)

    document.getElementById("clock").innerHTML = time;
}
show()
