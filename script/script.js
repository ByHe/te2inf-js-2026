//------- Click/innerText -----------
const p1 = document.getElementById('p1');

p1.onclick = changeTxt;

function changeTxt(){
   p1.innerText += " nytt efter klick";
}

// ------- calculator/value------- 
const num1 = document.getElementById('n1');
const num2 = document.getElementById('n2');

num1.onchange = sum;
num2.onchange = sum;

function sum(){
   const output = document.getElementById('op1');

   if(num1.value && num2.value){
      output.innerText = Number(num1.value) + Number(num2.value);
   }else{
      output.innerText = '';
   }
}

//------- ul/li eventobjektet --------
//------- target/currentTarget --------
const ul = document.getElementById('ul1');
ul.onclick = changeBg;

function changeBg(event){
   // Prova byta currentTarget mot target nedan
   event.currentTarget.style.backgroundColor = "red";
}

//------- läs in flera element i en array --------
// Eftersom getElements... är i pluralis kommer metoden alltid 
// returnera en array av element. Även om det endast finns ett element av typen.
const liArray = document.getElementsByTagName('li');

for(let i = 0; i < liArray.length; i++){
   liArray[i].onclick = changeColor;
}

function changeColor(e){
   e.target.style.color = "green";
   alert(e.target.id);
}

//---------- KeyBoard ----------

const keyBoard = document.getElementById("keyBoard");

const btns = keyBoard.getElementsByTagName("button");

for(let btn of btns){
   btn.onclick = display;
}

function display(e){
   document.getElementById('op2').innerText = e.target.innerText;
}