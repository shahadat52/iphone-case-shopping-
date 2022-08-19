function updateFieldValueC(isIncrise){
    const elementField = document.getElementById('case-field');
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

function quantityElementPriceCase(elementPrice, elementQuantity){
    const phonePrice = document.getElementById(elementPrice);
    const totalPhonePrice = elementQuantity * 59;
    phonePrice.innerText = totalPhonePrice;
    return totalPhonePrice;
  
 }

document.getElementById('case-plus').addEventListener('click', function(){
    const fieldValue = updateFieldValueC(true);
    const quantityElementPrices =  quantityElementPriceCase('case-price', fieldValue)
    const currentPhonePrice =currentPrice('phone-price')
    const currentCasePrice =currentPrice('case-price')
    const subTotal = currentPhonePrice + currentCasePrice;
  const setSumSubtotal = setSubtotal('subtotals', subTotal)
  const totalTaxTaka = taxTaka(setSumSubtotal)
 const setTax = setSubtotal('tax', totalTaxTaka)
 const total = subTotal + setTax;
 const setTotalTk = setSubtotal('pay', total)

    
    })  



    document.getElementById('case-minus').addEventListener('click', function(){
        const fieldValue = updateFieldValueC(false);
        const quantityElementPrices =  quantityElementPriceCase('case-price', fieldValue)
        const currentPhonePrice =currentPrice('phone-price')
        const currentCasePrice =currentPrice('case-price')
        const subTotal = currentPhonePrice + currentCasePrice;
  const setSumSubtotal = setSubtotal('subtotals', subTotal)
  const totalTaxTaka = taxTaka(setSumSubtotal)
 const setTax = setSubtotal('tax', totalTaxTaka)
 const total = subTotal + setTax;
 const setTotalTk = setSubtotal('pay', total)

        
        })   