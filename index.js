/*
* totalCart = [   {name : 'shoes', price : '$ 50', des : 'this is super cool and aws', rating : '4' }, { }, { }  ]
*
*/
var totalCart = []  
if(localStorage.getItem("totalcart")){
    totalCart = JSON.parse(localStorage.getItem("totalcart"))
}
document.getElementById("totalCart").innerText = totalCart.length

const addToCart = (product_id)=>{
    let price = document.getElementById("price_"+product_id).innerText
    let description = document.getElementById("des_"+product_id).innerText
    let product = document.getElementById("productname_"+product_id).innerText
    let image = document.getElementById("image_"+product_id).src
    let newProduct = { price, description ,product,image }

    totalCart.push(newProduct )

    document.getElementById("totalCart").innerText = totalCart.length

    localStorage.setItem("totalcart", JSON.stringify(totalCart))
} 
