let display = document.getElementById('display');

function appendValue(value){
    display.value = display.value + value;
}
function clearInterval(){
    display.value = 0;
}
function calculate(){
    display.value = eval (display.value);
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}