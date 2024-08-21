console.log("Starting")
let counter = 0;
function counterdisplay (){
    const result = document.getElementById("counterValue")
    result.innerText = counter;
}
function incrementCounter(){
    counter++;
    counterdisplay();
}
function decrementCounter(){
    if(counter > 0){
        counter--;
        counterdisplay();
    }
}
function resetCounter(){
    counter = 0;
    counterdisplay();
}
function applyCustomValue(){
    const customValue = document.getElementById('input');
    const parsedValue = parseInt(customValue.value);
    counter =counter + parsedValue;
    customValue.value = "";
    counterdisplay()
}