// script.js

// Add product to cart
function addToCart(productName, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ productName, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Display cart items
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <p>${item.productName} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total:</strong> ₹${total}`;
  cartContainer.appendChild(totalDiv);
}

// Remove product from cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  if (cart.length === 0) return alert("Cart is empty!");

  const timestamp = new Date().toLocaleString();
  const order = {
    id: Date.now(),
    items: [...cart], // Deep copy
    total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
    date: timestamp,
  };

  orders.push(order);
  saveOrders();

  cart = [];
  saveCart();

  alert("Order placed successfully!");
  window.location.href = "orders.html";
}


function displayOrders() {
  const container = document.getElementById("orders-list");
  if (!container) return;

  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "order";
    div.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p>Date: ${order.date}</p>
      <p>Total: ₹${order.total}</p>
      <ul>
        ${order.items.map(item => `<li>${item.productName} × ${item.quantity}</li>`).join("")}
      </ul>
    `;
    container.appendChild(div);
  });
}


function moveToOrders() {
  if (!cart || cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const timestamp = new Date().toLocaleString();
  const newOrder = {
    id: Date.now(),
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    date: timestamp,
    status: "Pending"
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Cart moved to orders!");
  location.reload(); // Refresh to see new order
}