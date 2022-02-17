document.getElementById('calculationId').addEventListener('click',function(){
   const income= document.getElementById('income');
   const incomeValue=income.value;
   const incomePar= parseFloat(incomeValue);

   const balamce= document.getElementById('balance');
   // const balamceInner= balamce.innerText;
   // const balamcePar= parseFloat(balamceInner);
   const totalExpens= document.getElementById('expense');
   const expensInner=totalExpens.innerText;
   const expensPar= parseFloat(expensInner);


   const foodExpenses= document.getElementById('foodForm')
   const foodValue=foodExpenses.value;
   const foodPar= parseFloat(foodValue);

   const rentExpenses= document.getElementById('rentForm')
   const rentValue=rentExpenses.value;
   const rentPar= parseFloat(rentValue);

   const clothesExpenses= document.getElementById('clothesForm')
   const clothesValue=clothesExpenses.value;
   const clothesPar= parseFloat(clothesValue);

   const TotalEx=expense.innerText=foodPar+rentPar+clothesPar; 

   balamce.innerText= incomePar - TotalEx;

});
