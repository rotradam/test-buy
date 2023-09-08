// Get the input elements
const amountInput = document.getElementById('amount');
const quoteAmountInput = document.getElementById('quoteAmount');

// Dropdowns for selecting currencies
// Add event listeners to handle changes
const fiatDropdown = document.querySelector('[data-testid="currencySelectionFiat"]');
const cryptoDropdown = document.querySelector('[data-testid="currencySelectionCrypto"]');

fiatDropdown.addEventListener('click', function() {
    // Handle fiat currency selection
});

cryptoDropdown.addEventListener('click', function() {
    // Handle crypto currency selection
});

// Get the submit button
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Extract values from the inputs
    const amount = amountInput.value;
    const quoteAmount = quoteAmountInput.value;

    // Extract selected currencies from the dropdowns
    const fiatCurrency = fiatDropdown.querySelector('p').innerText.trim();
    const cryptoCurrency = cryptoDropdown.querySelector('p').innerText.trim();

    // Construct the MoonPay URL with your API key
    const moonpayUrl = `https://buy.moonpay.com/?apiKey=pk_live_ggMIn2nJaeNslwe4m9NiEGz038xl1V&currency=${cryptoCurrency}&baseCurrency=${fiatCurrency}&amount=${amount}`;

    // Redirect the user to the MoonPay URL
    window.location.href = moonpayUrl;
});


document.addEventListener("DOMContentLoaded", function() {
    const moonpaySdk = window.MoonPayWebSdk.init({  
        flow: 'buy',
        environment: 'production',
        variant: 'overlay',  
        params: {  
            apiKey: 'pk_live_ggMIn2nJaeNslwe4m9NiEGz038xl1V'
        }
    });

    document.querySelector("#continueBtn").addEventListener("click", function(e) {
        e.preventDefault(); // Prevent any default behavior
        moonpaySdk.show();
    });
});
