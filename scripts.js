let servingsPer = document.querySelector('#servingsPer');
let servingSize = document.querySelector('#servingSize');
let servingCalories = document.querySelector('#servingCalories');
let totalFat = document.querySelector('#totalFat');
let saturatedFat = document.querySelector('#saturatedFat');
let transFat = document.querySelector('#transFat');
let cholestrol = document.querySelector('#cholestrol');
let sodium = document.querySelector('#sodium');
let totalCarbs = document.querySelector('#totalCarbs');
let dietaryFiber = document.querySelector('#dietaryFiber');
let totalSugars = document.querySelector('#totalSugars');
let addedSugars = document.querySelector('#addedSugars');
let protein = document.querySelector('#protein');
let vitaminD = document.querySelector('#vitaminD');
let calcium = document.querySelector('#calcium');
let iron = document.querySelector('#iron');
let potassium = document.querySelector('#potassium');

let totalFatPercent = document.querySelector('#totalFatPercent');
let saturatedFatPercent = document.querySelector('#saturatedFatPercent');
let cholestrolPercent = document.querySelector('#cholestrolPercent');
let sodiumPercent = document.querySelector('#sodiumPercent');
let totalCarbsPercent = document.querySelector('#totalCarbsPercent');
let addedSugarsPercent = document.querySelector('#addedSugarsPercent');
let vitaminDPercent = document.querySelector('#vitaminDPercent');
let calciumPercent = document.querySelector('#calciumPercent');
let ironPercent = document.querySelector('#ironPercent');
let potassiumPercent = document.querySelector('#potassiumPercent');


const buttonSubmit = document.querySelector('#submit');

let servingsPerText = document.querySelector('#servingsPerText');
let servingSizeText = document.querySelector('#servingSizeText');
let servingCaloriesText = document.querySelector('#servingCaloriesText');
let totalFatText = document.querySelector('#totalFatText');
let saturatedFatText = document.querySelector('#saturatedFatText');
let transFatText = document.querySelector('#transFatText');
let cholestrolText = document.querySelector('#cholestrolText');
let sodiumText = document.querySelector('#sodiumText');
let totalCarbsText = document.querySelector('#totalCarbsText');
let dietaryFiberText = document.querySelector('#dietaryFiberText');
let totalSugarsText = document.querySelector('#totalSugarsText');
let addedSugarsText = document.querySelector('#addedSugarsText');
let proteinText = document.querySelector('#proteinText');
let vitaminDText = document.querySelector('#vitaminDText');
let calciumText = document.querySelector('#calciumText');
let ironText = document.querySelector('#ironText');
let potassiumText = document.querySelector('#potassiumText');

let totalFatPercentText = document.querySelector('#totalFatPercentText');
let saturatedFatPercentText = document.querySelector('#saturatedFatPercentText');
let cholestrolPercentText = document.querySelector('#cholestrolPercentText');
let sodiumPercentText = document.querySelector('#sodiumPercentText');
let totalCarbsPercentText = document.querySelector('#totalCarbsPercentText');
let addedSugarsPercentText = document.querySelector('#addedSugarsPercentText');
let vitaminDPercentText = document.querySelector('#vitaminDPercentText');
let calciumPercentText = document.querySelector('#calciumPercentText');
let ironPercentText = document.querySelector('#ironPercentText');
let potassiumPercentText = document.querySelector('#potassiumPercentText');


buttonSubmit.onclick = updateLabel;

function updateLabel() {
    servingsPerText.textContent = servingsPer.value;
    servingSizeText.textContent = servingSize.value;
    servingCaloriesText.textContent = servingCalories.value;
    totalFatText.textContent = totalFat.value;
    saturatedFatText.textContent = saturatedFat.value;
    transFatText.textContent = transFat.value;
    cholestrolText.textContent = cholestrol.value;
    sodiumText.textContent = sodium.value;
    totalCarbsText.textContent = totalCarbs.value;
    dietaryFiberText.textContent = dietaryFiber.value;
    totalSugarsText.textContent = totalSugars.value;
    addedSugarsText.textContent = addedSugars.value;
    proteinText.textContent = protein.value;
    vitaminDText.textContent = vitaminD.value;
    calciumText.textContent = calcium.value;
    ironText.textContent = iron.value;
    potassiumText.textContent = potassium.value;
    totalFatPercentText.textContent = totalFatPercent.value;
    saturatedFatPercentText.textContent = saturatedFatPercent.value;
    cholestrolPercentText.textContent = cholestrolPercent.value;
    sodiumPercentText.textContent = sodiumPercent.value;
    totalCarbsPercentText.textContent = totalCarbsPercent.value;
    addedSugarsPercentText.textContent = addedSugarsPercent.value;
    vitaminDPercentText.textContent = vitaminDPercent.value;
    calciumPercentText.textContent = calciumPercent.value;
    ironPercentText.textContent = ironPercent.value;
    potassiumPercentText.textContent = potassiumPercent.value;

}