function incomeExpensessValue(inputall){
   const income = document.getElementById(inputall);
   if(income.value>=0){
      if(isNaN(income.value)){
         alert('Please enter onyl number')
         return;
      }
      else{
         const incomeValue= income.value;
         const incomePar = parseFloat(incomeValue);
         return incomePar;
      }
      
   }
   else{
      alert('Please enter a positive  & onyl number')
      return;
   }
   
}
function incomeExpensessInner(inputInnerText){
   const income = document.getElementById(inputInnerText);
   return income;
}

document.getElementById('calculationId').addEventListener('click', function () {
      const income =incomeExpensessValue('income');
     
      const foodForm =incomeExpensessValue('foodForm');
 
      const rentForm =incomeExpensessValue('rentForm');
 
      const clothesForm=incomeExpensessValue('clothesForm');

      const allExpance= foodForm+rentForm+clothesForm;

      const toalatExpance = incomeExpensessInner('expense');

      const balamce =incomeExpensessInner('balance');
      if(income>= allExpance){
         const Expance= toalatExpance.innerText=allExpance;
         balamce.innerText=income-Expance;
      }
      else{
         alert('You dont have that much money to spend')
      }

     
});

document.getElementById('saveBalance').addEventListener('click', function () {
   const saveForm= incomeExpensessValue('saveForm');
   const income =document.getElementById('income');
   const parsent = income.value/100*saveForm;
   const balamce =incomeExpensessInner('balance');
   const saving= document.getElementById('saving')
   const remaining= document.getElementById('remaining')
    const savingBalance =  saving.innerText=parsent;
      
   if(savingBalance<=balamce.innerText){
      remaining.innerText= balamce.innerText-parsent;
   }
   else(
      alert('You have spent too much. You are spending so much that you have no money to save')

   )
});
    var number='aasss';

if(typeof(number)=="string")
{
   console.log('not sumbar')
}
else(typeof(number)=="number")
{
   console.log('sumbar')
}