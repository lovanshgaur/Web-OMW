const cartButtons = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.querySelector('.cart-count');
let currentCartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCartCount++;
        cartCountDisplay.textContent = currentCartCount;
    });
});

console.log("Template Loaded");