function updateCaseNumber(isIncrease) {
  const inputField = document.getElementById("case-number");
  const inputValue = inputField.value;
  if (isIncrease) {
    inputField.value = parseInt(inputValue) + 1;
  } else if (inputValue > 0) {
    inputField.value = parseInt(inputValue) - 1;
  }
}
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber(false);
});
