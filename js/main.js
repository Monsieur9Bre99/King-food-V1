// Variables declaration
let menu = document.querySelector('#toggle-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60) {
        document.querySelector('#scrollUp').classList.add('active');
    } else {
        document.querySelector('#scrollUp').classList.remove('active');
    }
}

// loader 

function loader(){
    document.querySelector('#loader').classList.add('fadeOut');
}

function fadeOut(){
    setInterval(loader, 2000);
}

window.onload = fadeOut();
