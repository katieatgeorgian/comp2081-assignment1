// grabs the image in the welcome section
const cafeImage = document.querySelector("#cafe");
//grabs The Cupcakery Cafe title
const title = document.querySelector("h1");

// Event Listeners
cafeImage.addEventListener("mouseover", changePic);
cafeImage.addEventListener("mouseout", changePicBack);
title.addEventListener("mouseover", italizeTitle);
title.addEventListener("mouseout", reformatTitle);

// functions to change image to a close up pic on hover and the back to distant one once mouse leaves
function changePic() {
  cafeImage.src = "./images/display.jpg";
  cafeImage.alt = "cupcake bakery front desk";
}

function changePicBack() {
  cafeImage.src = "./images/cafe.jpg";
  cafeImage.alt = "cupcakes and cakes in a display case";
}

// functions to change the h1 font when hovered and then back once mouse leaves
function italizeTitle() {
  title.style.fontStyle = "italic";
}

function reformatTitle() {
  title.style.fontStyle = "normal";
}
