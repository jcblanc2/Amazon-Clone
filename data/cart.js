import { products } from "./products.js";

export const cart = [] === [] || JSON.parse(localStorage.getItem('cart'));

// add a product to cart
export function addToCart(id) {
    let matchItem;

    cart.forEach((cartItem) => {
        if (cartItem.id === id) {
            matchItem = cartItem;
        }
    });

    if (matchItem) {
        matchItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    saveToStorage();
}

// remove a product from cart
export function removeFromCart(id) {
    cart.forEach((cartItem, index) => {
        if (cartItem.id === id) {
            cart.splice(index, 1);
        }
    });

    saveToStorage();
}


// update the quantity of products
export function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}

// Calculate the total price based on the items in your cart
export function calculateItemsTotal() {
    let totalPrice = 0;

    cart.forEach((cartItem) => {
        const productId = cartItem.id;
        const matchItem = products.find((product) => product.id === productId);

        if (matchItem) {
            totalPrice += cartItem.quantity * matchItem.priceCents / 100; // Convert priceCents to dollars
        }
    });

    return totalPrice.toFixed(2); // Format total price with two decimal places
}


// save cart
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}