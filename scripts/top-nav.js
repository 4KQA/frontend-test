/* 
Responsive Nav
*/
function openNavMenu() {
  const topNav = document.querySelector("#top-nav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

/* Nav */

// Insert NAV on Load
window.addEventListener("load", () => {
  document.querySelector(".menu-item-1").innerHTML = menuItems[1];
  document.querySelector(".menu-item-2").innerHTML = menuItems[2];
  document.querySelector(".menu-item-3").innerHTML = menuItems[3];
  document.querySelector(".menu-item-4").innerHTML = menuItems[4];
  document.querySelector(".menu-item-5").innerHTML = menuItems[5];
  document.querySelector(".menu-item-6").innerHTML = menuItems[6];
  document.querySelector(".menu-item-7").innerHTML = menuItems[7];
  document.querySelector(".menu-item-8").innerHTML = menuItems[8];
  document.querySelector(".menu-item-9").innerHTML = menuItems[9];
  document.querySelector(".menu-item-10").innerHTML = menuItems[10];
  document.querySelector(".menu-item-11").innerHTML = menuItems[11];
});

/* 
Dropdown
*/
const navbar = document.querySelector("#top-nav");
const dropdown1 = document.querySelector("#dropdown-1");
const dropdown2 = document.querySelector("#dropdown-2");

document.querySelector(".menu-item-2").addEventListener("mouseover", openDropdown1);
document.querySelector(".menu-item-6").addEventListener("mouseover", openDropdown2);
navbar.addEventListener("mouseleave", closeDropdowns);

function openDropdown1() {
  dropdown1.classList.remove("hide-dropdown");
}

function openDropdown2() {
  dropdown2.classList.remove("hide-dropdown");
}

function closeDropdowns() {
  dropdown1.classList.add("hide-dropdown");
  dropdown2.classList.add("hide-dropdown");
}