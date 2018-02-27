window.addEventListener('load', function() {
    let total = document.getElementById('total-amount');
    let firstTipButton = document.getElementById('first-tip-button');
    let secondTipButton = document.getElementById('second-tip-button');
    let thirdTipButton = document.getElementById('third-tip-button');
    let result = document.getElementById('tip-result');

    function calculate10(n) {
       let tipAmount = n * 0.10;
       return '$' + tipAmount.toFixed(2);
    }

    firstTipButton.addEventListener('click', function() {
       let totalAmount = total.value;
        result.innerHTML = calculate10(totalAmount);
    });

    function calculate15(n) {
        let tipAmount = n * 0.15;
        return '$' + tipAmount.toFixed(2);
     }
 
     secondTipButton.addEventListener('click', function() {
        let totalAmount = total.value;
         result.innerHTML = calculate15(totalAmount);
     });

     function calculate20(n) {
        let tipAmount = n * 0.20;
        return '$' + tipAmount.toFixed(2);
     }
 
     thirdTipButton.addEventListener('click', function() {
        let totalAmount = total.value;
         result.innerHTML = calculate20(totalAmount);
     });

});