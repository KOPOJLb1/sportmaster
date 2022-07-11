var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];
var span_1 = document.getElementsByClassName("close_1")[0];
var span_2 = document.getElementsByClassName("close_2")[0];
var span_3 = document.getElementsByClassName("close_3")[0];
var span_4 = document.getElementsByClassName("close_4")[0];
var span_5 = document.getElementsByClassName("close_5")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span_1.onclick = function() {
    modal.style.display = "none";
}
span_2.onclick = function() {
    modal.style.display = "none";
}
span_3.onclick = function() {
    modal.style.display = "none";
}
span_4.onclick = function() {
    modal.style.display = "none";
}
span_5.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
