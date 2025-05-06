"use strict";

// Check if `getElement` is already declared
if (typeof window.getElement !== "function") {
    
    window.getElement = (selector) => document.querySelector(selector);
    console.log("getElement function was not declared, so it's now defined.");
} else {
    console.log("getElement function is already declared.");
}
document.addEventListener("DOMContentLoaded", () =>{

    getElement("#submit").addEventListener("click", subscribe);
});

function subscribe(){
    
    let userEmail = getElement("#email_input").value;
    let arraySubscribers = [];

    //retrieve existing subscribers from session storage
    const storedSubscribers = sessionStorage.getItem("Subscribers");
    if (storedSubscribers) {
        //parse json into array
        arraySubscribers = JSON.parse(storedSubscribers);
    }

    if(validateEmail(userEmail)){
        //add user email to email list
        arraySubscribers.push(userEmail);

        sessionStorage.setItem("Subscribers", JSON.stringify(arraySubscribers));
        window.alert("Thank you for subscribing!");
        console.log(arraySubscribers);
    }else{
        getElement("#error_subscribe").innerText = "Please enter a valid email";
        event.preventDefault();

    }
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test if the email matches the regex pattern
    return pattern.test(email);
}