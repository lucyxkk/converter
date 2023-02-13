const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.addEventListener("input", handleInput1);

input2.addEventListener("input", handleInput2);

function handleInput1(e) {
  let result = convert(e);
  input2.value = result;
}

function handleInput2(e) {
  let result = convert(e);
  input1.value = result;
}

function convert(input) {
  const num = e.target.value;
  return input * 2;
}
