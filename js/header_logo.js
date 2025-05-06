"use strict";

// Check if `getElement` is already declared
// earlier in html scripts
if (typeof window.getElement !== "function") {
    
    window.getElement = (selector) => document.querySelector(selector);
    console.log("getElement function was not declared, so it's now defined.");
} else {
    console.log("getElement function is already declared.");
}

document.addEventListener("DOMContentLoaded", () => {

    let logoContainer = getElement("#header_logo_container");
    let logoLink = logoContainer.querySelector("img");

    //mouse in
    logoContainer.addEventListener("mouseenter", () =>{
        logoLink.setAttribute("src", "../files/images/BYRD YRD Logo PURPLE BIGGER.png")
    });
    //mouse out
    logoContainer.addEventListener("mouseleave", () =>{
        logoLink.setAttribute("src", "../files/images/BYRD YRD Logo WHITE BIGGER.png")
    });

});