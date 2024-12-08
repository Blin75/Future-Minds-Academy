function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("emailError").textContent = "";

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Validate Contact
    const contact = document.getElementById("contact").value;
    if (!/^[0-9]+$/.test(contact)) {
        document.getElementById("contactError").textContent = "Contact must be a valid phone number.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Email must contain '@'.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}