let itemsInCart = [];

let itemList = [
    {
        name: "Car",
        price: 50000
    },
    {
        name: "House",
        price: 250000
    },
    {
        name: "Boat",
        price: 80000
    },
    {
        name: "Helicopter",
        price: 650000
    },
    {
        name: "Private Plane",
        price: 1500000
    }
];

let table1 = document.querySelector(".itemTable");

table1.addEventListener("click",
function(event) {
    event.preventDefault()
    itemName = itemList.name;
    itemPrice = itemList.price;
    //event.addItem(itemName, itemPrice);
    
    itemsInCart = [itemsInCart, { name: itemName, price: itemPrice }];
    console.log(`You added ${itemName} to cart`)
});

function printTotal() {
    let total = 0;
    for (let { price } of itemsInCart) {
        total += (price * .06);
    }
    console.log(`Your total plus tax is: ${total}`);
}



printTotal();

