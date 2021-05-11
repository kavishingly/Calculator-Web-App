const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const calScreen = document.querySelector(".calculator-screen");
const allClear= document.querySelector(".all-clear");

const per= document.querySelector(".percentage");
let prevInput = '0';
let currentinput = '0';
let calOperator = '';

const updateScreen = (number) => {
   calScreen.value= number
}
const inputNumber = (number)=> {
   if(currentinput==='0') {
      currentinput=number;
   } else {
   currentinput += number;
    }
   }


numbers.forEach((number)=>{
   number.addEventListener("click", (event)=>{
     inputNumber(event.target.value)
     updateScreen(currentinput)
    

   })
})

operators.forEach((operator)=>{
   operator.addEventListener("click", (event)=>{
    // console.log(event.target.value)
     inputOp(event.target.value)
   })
})
const inputOp = (operator) => {
   prevInput= currentinput;
   calOperator=operator;
   currentinput='0';
   
}
equal.addEventListener("click", () => {
   calculate();
   updateScreen(currentinput);

})

const calculate = () => {
   let result=0;
   switch(calOperator) {
      case '+' :
         result = parseFloat(prevInput)+parseFloat(currentinput);
         break;
      case "-" :
         result=parseFloat(prevInput)-parseFloat(currentinput);
         break;
      case "*" :
         result=parseFloat(prevInput)*parseFloat(currentinput);
         break;
      case "/" :
         result=parseFloat(prevInput)/parseFloat(currentinput);
         break;   
      default:
         return;

   }
   currentinput=result.toString();
   calOperator='';
}

allClear.addEventListener("click", () => {
   clearAll();
   updateScreen(currentinput)

})

const clearAll = () => {
   prevInput='0';
   currentinput='0';
   calOperator='';
}
per.addEventListener("click", () => {
  divide100();

})
const divide100 = () => {
   currentinput/=100;
   updateScreen(currentinput);
}