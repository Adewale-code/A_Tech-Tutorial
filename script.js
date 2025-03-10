function payForCourse(courseName, amount) {
    var handler = PaystackPop.setup({
        key: 'YOUR_PUBLIC_KEY',  // Replace with your Paystack public key
        email: 'user@example.com',
        amount: amount * 100,
        currency: 'NGN',
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
            localStorage.setItem(courseName, "paid");
            document.getElementById("paidContent").style.display = "block";
            document.getElementById("payNow").style.display = "none";
        },
        onClose: function() {
            alert('Payment was not completed.');
        }
    });
    handler.openIframe();
}

function checkPaymentStatus(courseName) {
    if (localStorage.getItem(courseName) === "paid") {
        document.getElementById("paidContent").style.display = "block";
        document.getElementById("payNow").style.display = "none";
    }
}

function runHTMLCode() {
    var htmlCode = document.getElementById("htmlEditor").value;
    var iframe = document.getElementById("output").contentWindow.document;
    iframe.open();
    iframe.write(htmlCode);
    iframe.close();
}

function runHTMLCodeAdvanced() {
    var htmlCode = document.getElementById("htmlEditorAdvanced").value;
    var iframe = document.getElementById("outputAdvanced").contentWindow.document;
    iframe.open();
    iframe.write(htmlCode);
    iframe.close();
}
