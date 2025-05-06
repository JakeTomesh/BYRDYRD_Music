"use strict";

const getElement = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    //check flag is set in sessionStorage
    if (sessionStorage.getItem("fromLandingPage") === "true") {
        document.body.classList.add("page_transition");

        //after animation completes remove flag from sessionStorage
        setTimeout( () => {
            sessionStorage.removeItem("fromLandingPage");
        }, 1500);
    }
});

