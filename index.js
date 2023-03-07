const p = document.getElementById("rate");
const url = "https://api.nbp.pl/api/exchangerates/rates/a/gbp/";
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

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
  .catch((error) => {
    p.innerHTML = "Failed to fetch echange rates";
  });

function handleInput1(e) {
  const num = e.target.value;
  let result1;
  if (num === "") {
    hideError(warning1);
    result1 = "";
  } else if (isNaN(num)) {
    result1 = "";
    showError(warning1);
  } else {
    hideError(warning1);
    result1 = (num * rate).toFixed(4);
  }

  if (e.target === input1) {
    input2.value = result1;
  } else {
    input1.value = result2;
  }
}

function handleInput2(e) {
  const num = e.target.value;
  let result2;

  if (num === "") {
    hideError(warning2);
    result2 = "";
  } else if (isNaN(num)) {
    result2 = "";
    showError(warning2);
  } else {
    hideError(warning2);
    result2 = (num / rate).toFixed(4);
  }

  if (e.target === input1) {
    input2.value = result1;
  } else {
    input1.value = result2;
  }
}

function showError(warningElement) {
  warningElement.classList.remove("disappear");
}

function hideError(warningElement) {
  warningElement.classList.add("disappear");
}