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
   event.currentTarget.style.backgroundColor = "red";
}

//------- läs in flera element i en array --------

const liArray = document.getElementsByTagName('li');

for(let i = 0; i < liArray.length; i++){
   liArray[i].onclick = changeColor;
}

function changeColor(e){
   e.target.style.color = "green";
}