let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggles a class to potentially change the menu icon (e.g., to a close icon)
    navbar.classList.toggle('active'); // Toggles the 'active' class on the navbar to show/hide it
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); // Removes the 'bx-x' class when scrolling
    navbar.classList.remove('active'); // Hides the navbar when scrolling
}
