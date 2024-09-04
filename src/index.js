function navToggler () {

  //get the id of hamburger icon.
  let getHamburgerIcon = document.getElementById('mobile-menu-btn');
  //get the div with an id of mobile-menu.
  let getMobileMenuList = document.getElementById('mobile-menu');

  //create function this function will be invoke via evenlistener.
  function toggleMenu () {
    getMobileMenuList.classList.toggle('hidden');
    getMobileMenuList.classList.toggle('flex');
  }

  //this will invoke the hamburger icon.
  getHamburgerIcon.addEventListener('click', toggleMenu);
  //this will show the menu when hamburger icon is clicked.
  getMobileMenuList.addEventListener('click', toggleMenu);
  
}

navToggler();