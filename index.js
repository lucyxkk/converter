const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.addEventListener("input", handleInput);
input2.addEventListener("input", handleInput);

function handleInput(e) {
  const num = e.target.value;
  let result = num * 2;
  if (e.target === input1) {
    input2.value = result;
  } else {
    input1.value = result;
  }
}
