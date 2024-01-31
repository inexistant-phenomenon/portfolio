
document.addEventListener("DOMContentLoaded", function () {

    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
        tablinks[i].style.borderBottom = "none";
    }
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function showtab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
        tablinks[i].style.borderBottom = "none";
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
        tabcontents[i].style.opacity = 0;
        tabcontents[i].style.display = "none";
    }

    event.currentTarget.classList.add("active-link");

    var selectedTabContent = document.getElementById(tabname);
    selectedTabContent.classList.add("active-tab");
    selectedTabContent.style.display = "block";

    selectedTabContent.offsetHeight;

    selectedTabContent.style.opacity = 1;
    }
    const menu=document.querySelector(".menu");
    const toggle=document.querySelector(".toggle");
        toggle.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })