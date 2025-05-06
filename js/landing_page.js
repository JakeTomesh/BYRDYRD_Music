"use strict";

const getElement = (selector) => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = getElement("#byrd_yrd_title_landing");
    const logoLink = logoContainer.querySelector("a");
    const targetPage = "pages/music.html";  
    const logoImage = getElement("#landingLogo");

   
    //event listener to start the zoom-in animation
    logoLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        //add class when clicked to trigger transition on music.html load
        logoContainer.classList.add("clicked");
        //set flag to true "yes im coming from the landing page"
        sessionStorage.setItem("fromLandingPage", "true");

        //wait for animation to complete 1.5s/1500ms
        setTimeout(function() {
            window.location.href = targetPage; 
        }, 1500);
    });

    //listener for logo color change
    logoLink.addEventListener("mouseenter", () => {
       logoImage.setAttribute("src", "files/images/BYRD YRD Logo PURPLE BIGGER.png");
    });

    logoLink.addEventListener("mouseleave", () =>{
        logoImage.setAttribute("src", "files/images/BYRD YRD Logo WHITE BIGGER.png")
    });
});
