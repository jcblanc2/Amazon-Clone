export const cart = [
    {id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",quantity:1},
    {id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",quantity:2},
];

// add a product to cart
export function addToCart(id){
    let matchItem;

    cart.forEach((cartItem) => {
        if(cartItem.id === id){
           matchItem = cartItem;
        }
    });

    if(matchItem){
        matchItem.quantity +=1 ;
    }else{
        cart.push({
            id: id,
            quantity: 1
        });
    }  
}