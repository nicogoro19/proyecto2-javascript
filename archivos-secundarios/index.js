const productos =[
    {
        img: "img1.jpg",
        id:1,
        nombre:"televisor",
        precio: 700
    },
    {
        img:"img2.webp",
        id:2,
        nombre: "lavarropas",
        precio:300
    },
    {
        img:"img3.jpeg",
        id:3,
        nombre:"microondas",
        precio:70
    },
    {
        img:"img4.webp",
        id:4,
        nombre:"secador",
        precio:50
    },
    {
        img:"img1.jpg",
        id:5,
        nombre:"cocina",
        precio:800
    },
    {
        img:"img2.webp",
        id:6,
        nombre:"iphone 16pro max",
        precio: 1300
    },
    {
        img:"img3.jpeg",
        id:7,
        nombre:"macboock pro m2pro",
        precio: 1700
    },
    {
        img:"img4.webp",
        id:8,
        nombre:"heladera con freezer",
        precio: 1000
    },
    {
        img:"img1.jpg",
        id:9,
        nombre:"termotanque electrico",
        precio: 500
    },
    {
        img:"img2.webp",
        id:10,
        nombre:"fiat 600",
        precio: 5000
    }
    ,
    {
        img:"img3.jpeg",
        id:11,
        nombre:"computadora samsung",
        precio: 1700
    }
    ,
    {
        img:"img4.webp",
        id:12,
        nombre:"televisor",
        precio: 900
    }
]
let cartProducts =[]
let productContainer = document.getElementById("products-container")
// lo primero que tenemos que hacer es renderisar nuestra lista para que sea visible en el html de la pagina, esto lo hacemos asi:
function renderProduct (productsArray){
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.classList.add("productos-card")
        card.innerHTML=`<img class="img-ropa" src="archivos-secundarios/imagenes/${producto.img}" alt="imagen ropa">
                        <h3 class="h3-prod">${producto.nombre}</h3>
                        <p class="p-prod">precio: ${producto.precio}</p>
                        <button class ="productoAgregar" id="${producto.id}">agregar</button>`
        productContainer.appendChild(card)
    })
    addToCartButton()
}
renderProduct(productos)
// aca realizamos la funcion del boton para que cuando lo toquemos, guarde el id del producto que estamos tocando, depues tealice una busqueda del mismo en la lista original, y la guarde en el carrito que estamos armando 
function addToCartButton(){
    addbutton= document.querySelectorAll(".productoAgregar")
    addbutton.forEach(button=>{
        button.onclick =(e)=>{
            const productId=  e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)
 
            localStorage.setItem("Cartproducts", JSON.stringify(cartProducts))
            // aca lo que estamos haciendo con el json es pasar todo a cadena de caracteres porque sino no se guardaria, a lo que despues lo vamos a pasar a objetos con el json.parse()
        }

    })
}
// el metodo current target sirve para sacar el valor de los botones, y el metodo value sirve para sacar el valor de los inputs
