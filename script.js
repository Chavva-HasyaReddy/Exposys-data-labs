var wholeWheatBun = 20;
price = 20;
let priceDiv = document.querySelector(".price-details");
var ingredients= {
    Cucumber:20,
    Lettuce:10,
    Cheese:20,
    Beef:50,
    Bow:10,
    Ketchup:5
};
var state = {
    Cucumber:true,
    Lettuce:true,
    Cheese:true,
    Beef:true,
    Bow:true,
    Ketchup:true
};
function renderAll() {
    renderCucumber();
    renderLettuce();
    renderCheese();
    renderBeef();
    renderBow();
    renderKetchup();
    renderButtons();
    renderIngredientsBoard();
    renderPrice();
}
// Individual render functions for each ingredient
function renderCucumber() {
    const cucumber = document.querySelector("#cucumber");
   
    if (cucumber) {
        cucumber.style.display = state.Cucumber ? "inherit" : "none";
    }
}

function renderLettuce() {
    const lettuce = document.querySelector("#lettuce");
  
    if (lettuce) {
        lettuce.style.display = state.Lettuce ? "inherit" : "none";
    }
}

function renderCheese() {
    const cheese = document.querySelector("#cheese");
   
    if (cheese) {
        cheese.style.display = state.Cheese ? "inherit" : "none";
    }
}

function renderBeef() {
    const beef = document.querySelector("#beef");
    
    if (beef) {
        beef.style.display = state.Beef ? "inherit" : "none";
    }
}

function renderBow() {
    const bow = document.querySelector("#bow");
   
    if (bow) {
        bow.style.display = state.Bow ? "inherit" : "none";
    }
}

function renderKetchup() {
    const ketchup = document.querySelector("#ketchup");
   
    if (ketchup) {
        ketchup.style.display = state.Ketchup ? "inherit" : "none";
    }
}


document.querySelector(".btn-cucumber").onclick = function () {
    state.Cucumber = !state.Cucumber; 
    renderAll(); 
};
document.querySelector(".btn-lettuce").onclick = function () {
   state.Lettuce= !state.Lettuce; 
   renderAll(); 
};
document.querySelector(".btn-cheese").onclick = function () {
   state.Cheese = !state.Cheese; 
   renderAll(); 
};
document.querySelector(".btn-beef").onclick = function () {
   state.Beef = !state.Beef; 
   renderAll(); 
};
document.querySelector(".btn-bow").onclick = function () {
   state.Bow = !state.Bow; 
   renderAll(); 
};
document.querySelector(".btn-ketchup").onclick = function () {
    state.Ketchup = !state.Ketchup; 
    renderAll(); 
 };
function renderButtons(){
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function(button) {
        if(!state [button.innerHTML]){
            button.classList.remove("active");
        } 
        else {
            button.classList.add("active");
        }
    });
}
function renderIngredientsBoard(){
    let items = ""
    for(let key in state) {
        if (state[key]) {
            items += key + "\n";
        }
    }
    document.querySelector("#ingredients").innerText = items;
}
function renderPrice(){
    price = 20;
    for(let key in state) {
        if (state[key]) {
            price += ingredients [key];
            console.log(key + ":" + ingredients [key]);
        }
    }    
    priceDiv.innerHTML = "Rs " + price;
}
orderButton.addEventListener("click", function() {
    var totalPrice = parseFloat(priceDiv.innerHTML);
    
    if (totalPrice <= 20) {
        alert("please select an ingredient");
    } 
    else {
        alert("You placed an order for Burger");
    }
});
