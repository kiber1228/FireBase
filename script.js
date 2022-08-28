const text = document.querySelector('.main-section-products')

function getItems() {
  db.collection("items").get().then((item)=>{
    let cartItem = []
    item.forEach((doc)=>{
      cartItem.push({
        id:doc.id,
        image:doc.data().image,
        name:doc.data().name,
        make:doc.data().make,
        rating:doc.data().rating,
        price:doc.data().price
      })
    })
    generateItems(cartItem)
  })

} 



let message;
function generateItems(data){

data.forEach(item=>{
  message =
  `
         
  <div class="main-product cursor-pointer ml-5">
    <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
      <!-- img -->
      <img src="${item.image}" alt="" class="w-full h-full object-contain">
    </div>
    <div class="product-name text-gray-700 font-bold mt-2 text-sm">
      <!-- name -->
      ${item.name}
    </div>
    <div class="product-make text-green-700">
      <!-- make -->
      Nintendo

    </div>
    <div class="product-rating text-yellow-300 my-1">
      ⭐⭐⭐⭐⭐ ${item.rating}
    </div>
    <div class="product-price font-bold text-gray-500 text-lg">
      $${item.price}
    </div>
    <div class="add-to-cart h-8 w-28 bg-yellow-500 flex items-center justify-center text-white rounded hover:bg-yellow-200 text-md">
      Add To Cart
    </div>
  </div>

  `
  text.innerHTML +=message
})


}

getItems()