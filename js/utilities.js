



 function currentPrice(price){
    const phonePrice = document.getElementById(price)
  const phonePriceString = phonePrice.innerText;
  const currentPhonePrice = parseInt(phonePriceString)
  return currentPhonePrice;
}

// sum of phone & case price 
function currentPrice(price){
    const phonePrice = document.getElementById(price)
  const phonePriceString = phonePrice.innerText;
  const currentPhonePrice = parseInt(phonePriceString)
  return currentPhonePrice;
}


// Set sub total
function setSubtotal(subtotals,subTotal){
    const previousSubTotal = document.getElementById(subtotals);
    previousSubTotal.innerText = subTotal;
    const previousSubTotalString = previousSubTotal.innerText;
    const previousSubNumber = parseInt(previousSubTotalString); 
    return previousSubNumber;
}

// finall total
function taxTaka(totalTaka){
    const totalTaxString = (totalTaka * 0.1).toFixed(2);
    const totalTax = parseInt(totalTaxString);
    return totalTax;
   }