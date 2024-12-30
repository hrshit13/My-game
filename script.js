
let score = 0;

const serveButton = document.getElementById("serve-btn");
const scoreDisplay = document.getElementById("score");
const orderText = document.getElementById("order-text");

const orders = [
    "Coconut Water",
    "Coconut Milk",
    "Coconut Ice Cream",
    "Coconut Smoothie"
];

serveButton.addEventListener("click", () => {
    // Randomly select a new order from the list
    const order = orders[Math.floor(Math.random() * orders.length)];
    orderText.textContent = `Order: ${order}`;

    // Update score
    score++;
    scoreDisplay.textContent = score;

    // Optional: Add more fun effects like sounds or animations for interactions
    alert(`Serving: ${order}!`);
});
