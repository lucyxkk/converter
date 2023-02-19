const p = document.getElementById("rate");

fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/")
  .then((res) => res.json())
  .then((data) => {
    rate = data.rates[0].mid;
    console.log(rate);
    p.innerHTML = "Today's exchange rate is: " + rate;
  });

let rate;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

// input1.addEventListener("input", handleInput);
// input2.addEventListener("input", handleInput);

// function handleInput(e) {
//   const num = e.target.value;

//   let result;

//   if (num === "") {
//     result = "";
//   } else if (isNaN(num)) {
//     result = "WRONG";
//   } else {
//     result = num * rate;
//   }

//   if (e.target === input1) {
//     input2.value = result;
//   } else {
//     input1.value = result;
//   }

input1.addEventListener("input", handleInput1);
input2.addEventListener("input", handleInput2);

function handleInput1(e) {
  const num = e.target.value;
  let result1;
  if (num === "") {
    result1 = "";
  } else if (isNaN(num)) {
     result1 = " ";
     let warning = document.getElementsByClassName(".invalid-input");
    warning.classList.add(".disappear");
  } else {
    result1 = num * rate;
    warning.classList.remove(".disappear");
    warning.classList.add(".warning");
    warning.classList.add(".invalid");

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
    result2 = "";
  } else if (isNaN(num)) {
    result2 = "WRONG"
  } else {
    result2 = num/rate;
  }

  if (e.target === input1) {
    input2.value = result1;
  } else {
    input1.value = result2;
  }
}






