function incomeExpensessValue(inputall){
   const income = document.getElementById(inputall);
   const incomeValue = income.value;
   const incomePar = parseFloat(incomeValue);
   return incomePar
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

      const allExpance= foodForm +rentForm+clothesForm;

      const toalatExpance = incomeExpensessInner('expense');
      const Expance= toalatExpance.innerText=allExpance;

      const balamce =incomeExpensessInner('balance');

      balamce.innerText=income-Expance;
});

document.getElementById('saveBalance').addEventListener('click', function () {
  
});