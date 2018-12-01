var i = 0;
var txt = '& Computer Science';
var speed = 125;
var delay = 2000;

function type() {
    if (i < txt.length - 1) {
        document.getElementById("cs").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    } else if(i == txt.length - 1) {
        document.getElementById("cs").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, delay);
    } else if(i == txt.length) {
        document.getElementById("cs").innerHTML = "";
        i = 0;
        setTimeout(type, delay);
    }
}