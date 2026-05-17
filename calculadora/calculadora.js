//calculadora 

const display = document.getElementById("display");

function apendtodisplay(input){
    display.value += input;
}

function calcular(){
   try{
    display.value = eval(display.value);
   } 
   catch(error){
        display.value = "ERRO";
   }
}

function limpartela(){
    display.value = "";
}