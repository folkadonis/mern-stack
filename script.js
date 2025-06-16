// // script.js

// // Add product to cart
// function addToCart(productName, price) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.push({ productName, price });
//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${productName} added to cart!`);
// }

// // Display cart items
// function displayCart() {
//   const cartContainer = document.getElementById("cart-items");
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let total = 0;

//   if (cart.length === 0) {
//     cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   cartContainer.innerHTML = "";
//   cart.forEach((item, index) => {
//     total += item.price;
//     const div = document.createElement("div");
//     div.className = "item";
//     div.innerHTML = `
//       <p>${item.productName} - ₹${item.price}</p>
//       <button onclick="removeFromCart(${index})">Remove</button>
//     `;
//     cartContainer.appendChild(div);
//   });

//   const totalDiv = document.createElement("p");
//   totalDiv.innerHTML = `<strong>Total:</strong> ₹${total}`;
//   cartContainer.appendChild(totalDiv);
// }

// // Remove product from cart
// function removeFromCart(index) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   displayCart();
// }

// function checkout() {
//   if (cart.length === 0) return alert("Cart is empty!");

//   const timestamp = new Date().toLocaleString();
//   const order = {
//     id: Date.now(),
//     items: [...cart], // Deep copy
//     total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
//     date: timestamp,
//   };

//   orders.push(order);
//   saveOrders();

//   cart = [];
//   saveCart();

//   alert("Order placed successfully!");
//   window.location.href = "orders.html";
// }


// function displayCart() {
//   const cartContainer = document.getElementById("cart-items");
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   if (cart.length === 0) {
//     cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   cartContainer.innerHTML = cart.map(item => `
//     <div class="item">
//       <strong>${item.productName}</strong><br>
//       Quantity: ${item.quantity} <br>
//       Price: ₹${item.price}
//     </div>
//   `).join("");
// }

// // Move cart items to orders and redirect
// function moveToOrders() {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   let orders = JSON.parse(localStorage.getItem('orders')) || [];

//   if (cart.length === 0) {
//     alert("Cart is empty!");
//     return;
//   }

//   const newOrder = {
//     id: Date.now(),
//     items: [...cart],
//     total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
//     date: new Date().toLocaleString(),
//     status: "Pending"
//   };

//   orders.push(newOrder);
//   localStorage.setItem("orders", JSON.stringify(orders));
//   localStorage.removeItem("cart");
//   localStorage.setItem("orderPlaced", "true");

//   window.location.href = "orders.html";
// }

// // Display orders in orders.html
// function displayOrders() {
//   const ordersList = document.getElementById("orders-list");
//   const orders = JSON.parse(localStorage.getItem("orders")) || [];

//   if (orders.length === 0) {
//     ordersList.innerHTML = "<p>No orders yet.</p>";
//     return;
//   }

//   ordersList.innerHTML = orders.reverse().map(order => `
//     <div class="order">
//       <p><strong>Order #${order.id}</strong></p>
//       <p>Date: ${order.date}</p>
//       <p>Status: ${order.status}</p>
//       <p>Total: ₹${order.total}</p>
//       <p>Items:</p>
//       <ul>
//         ${order.items.map(item => `<li>${item.productName} × ${item.quantity}</li>`).join("")}
//       </ul>
//     </div>
//   `).join("");
// }




