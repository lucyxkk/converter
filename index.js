const btn = document.querySelector("button");
let num = document.querySelector("input").value;
console.log(num);


btn.addEventListener("click", convert);

function convert() {
    let result = num*2;
    alert(result);

}
    
    
