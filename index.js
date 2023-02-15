const p = document.getElementById("rate");

fetch("http://api.nbp.pl/api/exchangerates/rates/a/gbp/")
  .then((res) => res.json())
  .then((data) => {
    rate = data.rates[0].mid;
    console.log(rate);
    p.innerHTML = "Today's exchange rate is: " + rate;
  });

let rate;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.addEventListener("input", handleInput);
input2.addEventListener("input", handleInput);

function handleInput(e) {
  const num = e.target.value;

  let result;

  if (num === "") {
    result = "";
  } else if (isNaN(num)) {
    result = "WRONG";
  } else {
    result = num * rate;
  }

  if (e.target === input1) {
    input2.value = result;
  } else {
    input1.value = result;
  }
}
