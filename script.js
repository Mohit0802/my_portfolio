const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// function openMenu(){
//     sideMenu.style.transform = 'translateX(-16rem)'
// }
// function closeMenu(){
//     sideMenu.style.transform = 'translateX(16rem)'
// }


//Note: This function toggles the side menu's visibility based on the isOpen parameter.
//Note: If isOpen is true, the menu slides in from the right; if false, it slides out.
function toggleMenu(isOpen) {
    sideMenu.style.transform = isOpen ? 'translateX(-16rem)' : 'translateX(16rem)';
    // console.log(`Menu is now ${isOpen ? 'open' : 'closed'}`); //Note: Log the menu state to the console
}

//Note: These arrow functions call toggleMenu with true or false to open or close the menu.
const openMenu = () => {
    toggleMenu(true);
    // console.log('Opening menu'); //Note: Log when the menu is opened
};

const closeMenu = () => {
    toggleMenu(false);
    // console.log('Closing menu'); //Note: Log when the menu is closed
};


window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
        'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
        'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})