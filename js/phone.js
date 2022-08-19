function updateFieldValue(isIncrise){
    const elementField = document.getElementById('phone-field');
    const elementFieldString = elementField.value;
    const elementFieldValue = parseInt(elementFieldString);
    let newElementFieldValue;

    if(isIncrise){
        newElementFieldValue = elementFieldValue + 1
    }
    else{
        newElementFieldValue = elementFieldValue - 1;
    }

    elementField.value = newElementFieldValue;
    return newElementFieldValue;
}



function quantityElementPrice(elementPrice, elementQuantity){
    const phonePrice = document.getElementById(elementPrice);
    const totalPhonePrice = elementQuantity * 1219;
    phonePrice.innerText = totalPhonePrice;
    return totalPhonePrice;
  
 }


// plus Button
document.getElementById('phone-plus').addEventListener('click', function(){
  const fieldValue = updateFieldValue(true);
  const quantityElementPrices =  quantityElementPrice('phone-price', fieldValue)

  const currentPhonePrice = currentPrice('phone-price');
  const currentCasePrice = currentPrice('case-price');
  
  const subTotal = currentPhonePrice + currentCasePrice;
  

 const setSumSubtotal = setSubtotal('subtotals', subTotal)
 const totalTaxTaka = taxTaka(setSumSubtotal)
 const setTax = setSubtotal('tax', totalTaxTaka)
 const total = subTotal + setTax;
 const setTotalTk = setSubtotal('pay', total)
 




 

  
  

})

// Minus Button
document.getElementById('phone-minus').addEventListener('click', function(){
  const fieldValue = updateFieldValue(false);
  const quantityElementPrices =  quantityElementPrice('phone-price', fieldValue)

  const currentPhonePrice =currentPrice('phone-price')

  const currentCasePrice =currentPrice('case-price')
  const subTotal = currentPhonePrice + currentCasePrice;
  const setSumSubtotal = setSubtotal('subtotals', subTotal)
  const totalTaxTaka = taxTaka(setSumSubtotal)
 const setTax = setSubtotal('tax', totalTaxTaka)
 const total = subTotal + setTax;
 const setTotalTk = setSubtotal('pay', total)

})