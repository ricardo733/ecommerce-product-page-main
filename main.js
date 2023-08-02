let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart-notification");
let cartImg = document.querySelector(".header__cart");
let cartModal = document.querySelector(".cart-modal");

let priceModal = document.querySelector(".cart-modal__price");


let empty = document.querySelector(".cart-modal__checkout-container");



let userInputNumber = 0;

plusBtn.addEventListener("click", (event)=>{
    userInputNumber++;
   userInput.value = userInputNumber;
});
minusBtn.addEventListener("click", (event)=>{
    if(userInputNumber >= 1){
        userInputNumber--;
        userInput.value = userInputNumber;
    }
    
});
let lastValue = parseInt(cartNotification.innerText);


addToCartBtn.addEventListener("click", (e)=>{
    lastValue = lastValue + userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    if(cartImg == 0){
        empty.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    }else{
        drawProductInModal();
    }
       
   
    priceModal.innerHTML = ` $125 x ${lastValue} <span>$${lastValue*125}.00</span>`
    
});

cartImg.addEventListener("click", ()=>{
    cartModal.classList.toggle("show");
    if(lastValue == 0){
        empty.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
       
    }else{
        drawProductInModal();
    }
});

const imageContainer = document.querySelector(".gallery__image-container");
const nextArrow = document.querySelector(".gallery__next");
const prevArrow = document.querySelector(".gallery__previous");

let imgIndex = 1;


nextArrow.addEventListener("click", ()=>{
        changeNextImage(imageContainer);
   });
prevArrow.addEventListener("click", ()=>{
        changePrevImage(imageContainer);
   });
    
    let modalBackground = document.querySelector(".modal-gallery__background");
   imageContainer.addEventListener("click", ()=>{
    modalBackground.style.display = "block"
   });


   modalCloseX = document.querySelector(".modal-gallery__close");
modalCloseX.addEventListener("click", ()=>{
    modalBackground.style.display = "none";
});


let thumbnails = document.querySelectorAll(".gallery__thumnail");
thumbnails = [...thumbnails]
thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener("click",(e)=>{
        imageContainer.style.backgroundImage = `url("../images/image-product-${e.target.id}.jpg")`
    })
});

modalNextArrow = document.querySelector(".modal-gallery__next");
modalPrevArrow = document.querySelector(".modal-gallery__previous");

let modalImgContainer = document.querySelector(".modal-gallery__image-container");
let modalThumbnails = document.querySelectorAll(".modal-gallery__thumnails");
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalThumbnail =>{
    modalThumbnail.addEventListener("click", event=>{
        console.log(event.target.id.slice(-1));
        modalImgContainer.style.backgroundImage = `url("../images/image-product-${event.target.id.slice(-1)}.jpg")`
    })
})

modalNextArrow.addEventListener("click", ()=>{
    changeNextImage(modalImgContainer);
})
modalPrevArrow.addEventListener("click", ()=>{
    changeNextImage(modalImgContainer);
})

let menuIcon = document.querySelector(".header__menu");
let modalMenu = document.querySelector(".modal-navbar__background");
let modalCloseIcon = document.querySelector(".modal-navbar__close-icon");

menuIcon.addEventListener("click", ()=>{
    console.log("pura paja");
    modalMenu.style.display = "block";
})

modalCloseIcon.addEventListener("click", ()=>{
    modalMenu.style.display = "none";
})

function deleteProduct(){
    const trashBtn = document.querySelector(".cart-modal__delete");
    trashBtn.addEventListener("click", ()=>{
        empty.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}



function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
       }
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`
}
function changePrevImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
       }
    imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`
}



function drawProductInModal(){
    empty.innerHTML =
    ` <div class="cart-modal__details-container">
    <img
      class="cart-modal__img"
      src="./images/image-product-1-thumbnail.jpg"
      alt=""
    />
    <div>
      <p class="cart-modal__product">Fall Limited Edition Sneakers</p>
      <p class="cart-modal__price">125.00 x  ${lastValue} <span class="cart-modal__full-price">$${lastValue*125}.00</span>
      </p>
    </div>
    <img
      class="cart-modal__delete"
      src="./images/icon-delete.svg"
      alt="delete icon"
    />
  </div>
  <button class="cart-modal__button">Checkout</button>
</div>`
deleteProduct();
}

