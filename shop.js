function cursorEffect(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3700,
        disableOnInteraction: false,
      }
  });
}

cursorEffect();

// ---------- CART -----------

let carts = document.querySelectorAll('.add-cart');

let products =[
  {
    name: 'Beautiful Peacock Blue Kalamkari',
    tag:'BeautifulPeacockBlueKalamkari',
    price:230.99,
    incart:0
  },
  {
    name: 'Ocean Blue Leheriya Printed Saree',
    tag:'OceanBlueLeheriyaPrintedSaree',
    price:3333.99,
    incart:0
  },
  {
    name: 'Subtle Gold Woven Kanjivaram Saree',
    tag:'SubtleGoldWovenKanjivaramSaree',
    price:4522.09,
    incart:0
  },
  {
    name: 'Beautiful Peacock Blue Kalamkari Printed Saree',
    tag:'BeautifulPeacockBlueKalamkariPrintedSaree',
    price:4131.99,
    incart:0
  },
  {
    name: 'Admiral Blue Brasso Saree',
    tag:'AdmiralBlueBrassoSaree',
    price:2230.99,
    incart:0
  },
  {
    name: 'SWARDA THIGALE in Golden Kanjivaram Saree',
    tag:'SWARDATHIGALEingoldenKanjivaramSaree',
    price:5019.99,
    incart:0
  },
  {
    name: 'Carmine Maroon Kanjivaram Saree',
    tag:'CarmineMaroonKanjivaramSaree',
    price:4749.99,
    incart:0
  }
]

for(let i=0;i< carts.length;i++){
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers')
  if(productNumbers){
    document.querySelector('.cartx span').textContent = productNumbers;
  }
}

function cartNumbers(product){
  let productNumbers = localStorage.getItem('cartNumbers')

  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cartx span').textContent = productNumbers + 1;
  }
  else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cartx span').textContent = 1;
  }

  setItems(product);

}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){

      if(cartItems[product.tag] == undefined){
          cartItems = {
            ...cartItems,
            [product.tag]:product
          }
      }

    cartItems[product.tag].incart += 1;
  }else{
    product.incart = 1;
    cartItems = {
      [product.tag]:product
    }
  }
  
  localStorage.setItem("productsInCart" , 
  JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost'); // Use the correct key

  console.log("My carCost is ", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price); // Use the correct key
  } else {
    localStorage.setItem("totalCost", product.price); // Use the correct key
  }
}

onLoadCartNumbers();
displayCart()
