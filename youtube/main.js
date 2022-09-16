let menu = document.querySelector(`.sidenav`);
let sidebar = document.querySelector(`.sidebar`);
let banner = document.querySelector(`.banner`);
let container1 = document.querySelector(`.banner1`);

menu.onclick = function(){
    sidebar.classList.toggle(`small-sidebar`);
    banner.classList.toggle(`large-banner`);
    container1.classList.toggle(`.larger-container`);
}

//banner
