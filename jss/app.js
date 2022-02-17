function incomeMoney(){
const income= document.getElementById('income');
const incomeValue= income.ariaValueMax;
const icomePar= parseFloat(incomeValue);
return icomePar
}
document.getElementById('calculationId').addEventListener('click', function(){
   console.log(incomeMoney())
   
})