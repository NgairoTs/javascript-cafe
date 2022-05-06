// -- JAVASCRIPT CAFE! -- //
// -- Products-- //
let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },

  muffin: {
    stock: 5,
    price: 8.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
}

console.log(products)

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee:' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee:' + products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    'Muffin:' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'Egg:' + products.eggs.stock
}

displayProducts()

// -- Customers -- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  // get a random size for the oder in a range , 1-5//
  // make a new array of the things they're ordering //
  // assign the new order to the customer object/
  // displaying the customer order//

  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let neworder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    neworder.push(productName)
  }
  customer.order = neworder
  displayingCustomerOrder()
}

function displayingCustomerOrder() {
  document.getElementById('CustomerOrder').innerHTML =
    'Customer Order: ' + customer.order
}

document.getElementById('customerbutton').onclick = generateCustomerOrder

///   Transactions ///

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'cash: ' + cash
}

displayCash()

function fillOrder() {
  // make a variable to keep track of our sales total
  // loop through the customer order array
  // if product is in stock, sell it to them, and keep tract of sales.
  //if we don't have it, alert we're out of stock
  // add sales total to cash
  // display evrything

  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[1]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert("I'm sorry, we're out of " + productName)
    }
  }
  cash += saleTotal
  customer.Order = []

  displayProducts()
  displayCash()
  displayingCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
