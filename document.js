function myFunction() {
    document.getElementById("connect").style.display = "flex";
    document.getElementById("connect").style.transition = "all 3s ease-in";
}

function greatFunction() {
    document.getElementById("connect").style.display = "none"
}

function theFunction() {
    document.getElementById("down").style.display = "flex"
}

function myButton() {
    document.getElementById("down").style.display = "none"
}

function changebg() {
    var navbar = document.getElementById("navbar")
    var scrollValue = window.scrollY;

    if(scrollValue < 5){
        navbar.classList.remove("bgcolor")
    } else {
        navbar.classList.add("bgcolor")
    }
}

window.addEventListener("scroll", changebg)


