//------- Click/innerText -----------
const p1 = document.getElementById('p1');

p1.onclick = changeTxT;

function changeTxT(){
   p1.innerText += " nytt efter klick";
}

// ------- calculator/value-------
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

n1.onchange = sum;
n2.onchange = sum;

function sum(){
   const output = document.getElementById('op1');

   if(n1.value && n2.value){
      output.innerText = Number(n1.value) + Number(n2.value);
   }else{
      output.innerText = '';
   }
}

//------- ul/li eventobj --------

//------- target/currentTarget --------

//------- hämta flera element --------