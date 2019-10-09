const cafeImage = document.querySelector("#cafe");

cafeImage.addEventListener("mouseover", changePic);
cafeImage.addEventListener("mouseout", changePicBack);

function changePic() {
  cafeImage.src = "./images/display.jpg";
  cafeImage.alt = "cupcake bakery front desk";
}

function changePicBack() {
  cafeImage.src = "./images/cafe.jpg";
  cafeImage.alt = "cupcakes and cakes in a display case";
}
