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
