function updateCaseNumber(product, price, isIncrease) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isIncrease) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;
}
//phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, false);
});

//case
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 59, false);
});
