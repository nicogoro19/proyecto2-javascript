let cartContainer = document.getElementById("cart-section")
// para recuperar lo del storage lo hacemos asi:
let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

function renderCarrito(cartItems){
    cartItems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML=`<h3>${producto.nombre}</h3>
                        <h4>${producto.id}</h4>`
        cartContainer.appendChild(cart) 
    })
}

renderCarrito(cartStorage)