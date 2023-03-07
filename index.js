const p = document.getElementById("rate");
const url = "https://api.nbp.pl/api/exchangerates/rates/a/gbp/";
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const roundDecimalPlaces = 4;

let rate;

input1.addEventListener("input", handleInput1);
input2.addEventListener("input", handleInput2);

const warning1 = document.getElementById("invalid-input");
const warning2 = document.getElementById("invalid-input2");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    rate = data.rates[0].mid;
    console.log(rate);
    p.innerHTML = "Today's exchange rate is: " + rate;
  })
  .catch(() => {
    p.innerHTML = "Failed to fetch echange rates";
  });

function handleInput1(e) {
  const num = e.target.value;
  let result = "";

  if (num === "") {
    hideAllErrors();
  } else if (isNaN(num)) {
    hideError(warning2);
    showError(warning1);
  } else {
    hideAllErrors();
    result = (num * rate).toFixed(roundDecimalPlaces);
  }

  input2.value = result;
}

function handleInput2(e) {
  const num = e.target.value;
  let result = "";

  if (num === "") {
    hideAllErrors();
  } else if (isNaN(num)) {
    hideError(warning1);
    showError(warning2);
  } else {
    hideAllErrors();
    result = (num / rate).toFixed(roundDecimalPlaces);
  }

  input1.value = result;
}

function showError(warningElement) {
  warningElement.classList.remove("disappear");
}

function hideError(warningElement) {
  warningElement.classList.add("disappear");
}

function hideAllErrors() {
  hideError(warning1);
  hideError(warning2);
}
