function updateProductNumber(product, price, isIncrease) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncrease) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
}
//phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

//case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
