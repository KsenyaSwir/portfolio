let elem_next = document.getElementById('next');
let elem_prev = document.getElementById('prev');

var images_next = document.querySelectorAll('object');

var i = 0;
var mas = [];
elem_next.onclick = function() {
    images_next[i].style.display = 'none';
    i++;
    if (i >= images_next.length) {
        i = 0;
    }
    images_next[i].style.display = 'block';
    console.log("111111 " + images_next[i].id);
    mas.push(images_next[i].id);
    let current = mas.pop();
    console.log("222222222 " + current);
    if (current== "obj_one") {
        document.getElementById("elem").onclick = function (){
            window.location.href = 'https://ksenyaswir.github.io/repair-design-project-task/';
        };
    }
    else if (current== "obj_two") {
        document.getElementById("elem").onclick = function () {
        window.location.href = 'https://ksenyaswir.github.io/theyalow_public/';
        }
    }
}

var exti = document.querySelector('object');
    if (exti.id == "obj_one") {
        document.getElementById("elem").onclick = function () {
            
            window.location.href = 'https://ksenyaswir.github.io/repair-design-project-task/';

        }
    }
    else if(exti.id == "obj_two"){
        document.getElementById("elem").onclick = function () {
            window.location.href = 'https://ksenyaswir.github.io/';
    }
    }


var images_prev = document.querySelectorAll('object');

var i = images_prev.length - 1;
elem_prev.onclick = function() {
    images_prev[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = images_prev.length - 1;
    }
    images_prev[i].style.display = 'block';
};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
