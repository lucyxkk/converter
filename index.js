const p = document.getElementById("rate");
const url = "https://api.nbp.pl/api/exchangerates/rates/a/gbp/";
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

let rate;

input1.addEventListener("input", handleInput1);
input2.addEventListener("input", handleInput2);

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
    adjustClass2();
    result1 = "";
  } else if (isNaN(num)) {
    result1 = "";
    adjustClass1();
  } else {
    adjustClass2();
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
    adjustClass4();
    result2 = "";
  } else if (isNaN(num)) {
    result2 = "";
    adjustClass3();
  } else {
    adjustClass4();
    result2 = (num / rate).toFixed(4);
  }

  if (e.target === input1) {
    input2.value = result1;
  } else {
    input1.value = result2;
  }
}

function adjustClass1() {
  let warningClass = document.querySelector(".img-warning");
  warningClass.classList.remove("disappear");
  warningClass.classList.add("warning");
  let invalidClass = document.querySelector(".p-invalid");
  invalidClass.classList.remove("disappear");
  invalidClass.classList.add("invalid");
}

function adjustClass2() {
  let warningClass = document.querySelector(".img-warning");
  warningClass.classList.remove("warning");
  warningClass.classList.add("disappear");
  let invalidClass = document.querySelector(".p-invalid");
  invalidClass.classList.remove("invalid");
  invalidClass.classList.add("disappear");
}

function adjustClass3() {
  let warningClass = document.querySelector(".img-warning2");
  warningClass.classList.remove("disappear");
  warningClass.classList.add("warning");
  let invalidClass = document.querySelector(".p-invalid2");
  invalidClass.classList.remove("disappear");
  invalidClass.classList.add("invalid");
}

function adjustClass4() {
  let warningClass = document.querySelector(".img-warning2");
  warningClass.classList.remove("warning");
  warningClass.classList.add("disappear");
  let invalidClass = document.querySelector(".p-invalid2");
  invalidClass.classList.remove("invalid");
  invalidClass.classList.add("disappear");
}
