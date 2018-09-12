//create object for each burger
//display inside the div
//create button at the bottom
//when button is clicked, display price with tax 4.712%

var spicyBur = {
    name:"SpicyBurger",
    meat: "Beef",
    veg: ["Lettuce", "tomato", "Onion"],
    sauce: ["Mayo", "Sriracha"],
    price: 12.95
}

var mildBur = {
 name: "MildBurger",
 meat: "Chicken",
 veg: "Spinach",
 sauce: ["Mustard", "Mayo"],
 price: 10.95
}

function seeMenu(){
    document.getElementById('cname').innerHTML = spicyBur.name;
    document.getElementById('cmeat').innerHTML = spicyBur.meat;
    document.getElementById('cveg').innerHTML = spicyBur.veg;
    document.getElementById('csauce').innerHTML = spicyBur.sauce;
    document.getElementById('cprice').innerHTML = spicyBur.price;
   
    document.getElementById('name').innerHTML = mildBur.name;
    document.getElementById('meat').innerHTML = mildBur.meat;
    document.getElementById('veg').innerHTML = mildBur.veg;
    document.getElementById('sauce').innerHTML = mildBur.sauce;
    document.getElementById('price').innerHTML = mildBur.price; 

   
}

function spicyP(){
   var totalS = (spicyBur.price * 1.04712).toFixed(2);
   document.getElementById('one').innerHTML = "Your Total is " + totalS;
}

function mildP(){
    var totalM = (mildBur.price * 1.04712).toFixed(2);
    document.getElementById('two').innerHTML = "Your Total is " + totalM;
}

