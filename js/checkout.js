"use strict";
const getElement = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>{

    loadSessionData();

});

function loadSessionData(){
    //get data from session
    let orderTotal = sessionStorage.getItem("cartTotal");

    //display message
    getElement("#order_total").innerText = `Your total order is: $${orderTotal}`;

    //make session data back to JSON objects
    let orderItems = JSON.parse(sessionStorage.getItem("cartItems"));
    console.log(orderItems);

    let imageContainer = getElement("#image_container");
    
    //dynamically add list items with order imgs
    if(orderItems && orderItems.length > 0){
        orderItems.forEach(item => {
            const li = document.createElement("li");
            const img = document.createElement("img");

            img.src = item.image;
            img.alt = item.name || "Ordered Item";
            img.classList.add("checkout_image");

            li.appendChild(img);
            imageContainer.appendChild(li);
        });
    }else {
        imageContainer.innerHTML = "<li>No items found in your cart.</li>";
    }
    console.log("loaded items:", orderItems);
}