const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

button1.addEventListener("click", convert1);

function convert1() {
  const num = input1.value;
  let result = num * 2;
  input2.value = result;
}

button2.addEventListener("click", convert2);

function convert2() {
  const num = input2.value;
  let result = num * 2;
  input1.value = result;
}
