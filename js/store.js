"use strict";
const getElement = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

let totalCartItems = 0;
let totalCartAmount = 0.0;
let selectedItems = [];

document.addEventListener("DOMContentLoaded", () =>{

    const addToCartButton = getAllElements(".add_to_cart");

    //user clicks "add to cart"
    addToCartButton.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    //when user checks out, take to check out page
   getElement("#checkout").addEventListener("click", validate);

});

async function addToCart(event){
    const button = event.target;
    const itemContainer = button.closest(".item_container");
    const image = itemContainer.querySelector("img");
    const imageId = image.id;

    const addedToCart = "Added to Cart!";
    const removedFromCart = "Add to Cart";

    const isAlreadyAdded = button.innerText === addedToCart;

    //tick cart total +1 dynamically
    //if item is NOT already added...
    if(!isAlreadyAdded){

        totalCartItems++;
        button.innerText = addedToCart;
        button.style.backgroundColor = "green";

          //async function here
        const item = await getItem(imageId);
        if(item){
            //add to total
            totalCartAmount += parseFloat(item.price);
            //add to array
            selectedItems.push(item);
            console.log("Item added:", item);
            console.log("Cart now contains:", selectedItems);
        }
    }else{

        totalCartItems--;
        button.innerText = removedFromCart;
        button.style.backgroundColor = "white";

        //remove from array
        selectedItems = selectedItems.filter(item => {

            let imageFileName = item.image.split("/").pop();
            let itemId = imageFileName.replace(".png", "").replace(".jpg", "");
            return itemId !== imageId;
        });
    }
    
    getElement("#cart_items").innerText = totalCartItems;

}

async function getItem(imageId) {
   
    const jsonURL = "../json/merch.json";

    //get json data for item clicked
    try{
        const response = await fetch(jsonURL);

        if(response.ok){
            const merchData = await response.json();

            for(let item of merchData){
                let imageFileName = item.image.split("/").pop();
                let itemId = imageFileName.replace(/\.(png|jpg|jpeg)/, "");

                if(itemId === imageId){
                    return item;
                }
            }
        }else{
            console.error("Could not fetch merch.json:", response.statusText);
        }
    }catch(error){
        console.error("Fetch error:", error);
    }
    return null;
}

function validate(e){
    
    if(totalCartItems === 0){
        getElement("#error").innerText = "*Please select at least one item*";
        e.preventDefault();
        return false;
    }

    //store data in session storage
    sessionStorage.setItem("cartItems", JSON.stringify(selectedItems));
    sessionStorage.setItem("cartTotal", totalCartAmount.toFixed(2));

    //manual redirect due to session storage not loading
    console.log("These items are being saved: ", selectedItems);
    
    window.location.href = "../pages/checkout.html";
    return true; 
}