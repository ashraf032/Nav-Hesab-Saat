let input1 = document.querySelector("#value1");
let input2 = document.querySelector("#value2");
let input3 = document.querySelector("#value3");

let button = document.querySelector("#hesBtn");

// button.onclick = function () {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
// }


button.addEventListener("click", function() {
    let total =+ input1.value+(input1.value*input3.value/100)*input2.value;



});




   


