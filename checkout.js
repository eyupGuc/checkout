const taxRate = 0.18;
const shippingPrice = 115;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //set items to local storage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //set items to sessionStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
});
//Capturing vs. bubling

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    // console.log("minus btn is clicked!");
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice();
      calculateCartPrice();
    } else {
      if (confirm("Product will be remowed?")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    event.target.previousElementSibling.innerText++;
    calculateCartPrice();
    calculateProductPrice();
    // console.log("plus btn is clicked");
  } else if (event.target.className == "remove-product") {
    // console.log("remove btn is clicked");
    event.target.parentElement.parentElement.parentElement.remove();
  } else {
    // console.log("other element is clicked");
  }
});

const calculateProductPrice = () => {};

const calculateCartPrice = () => {};
