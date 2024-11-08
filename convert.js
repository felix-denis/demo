const myText = document.getElementById("myText");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const results = document.getElementById("results");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(myText.value);
        temp = temp*9/5 + 32;
        results.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = Number(myText.value);
        temp = (temp-32)*(5/9);
        results.textContent = temp.toFixed(1) + "°C";
    }
    else{
        results.textContent = "Please select a unit ";
    }
}