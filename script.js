const products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Shoes", price: 1299 },
  { id: 3, name: "Bag", price: 899 }
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <span>${product.name} - ₹${product.price}</span>
    <button onclick="addToCart(${product.id})">Add</button>
  `;
  productsDiv.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  showCart();
}

function showCart() {
  cartDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartDiv.innerText = "Cart is empty";
    totalDiv.innerText = "";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.name} - ₹${item.price}`;
    cartDiv.appendChild(div);
    total += item.price;
  });

  totalDiv.innerText = "Total: ₹" + total;
}

function checkout() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  if (!name || !address) {
    alert("Please fill all details");
    return;
  }

  alert("Order placed successfully!");
  cart = [];
  showCart();
}
