function validate() {
    let email = document.getElementById('usermail').value;
    let password = document.getElementById('passlog').value;
    const required = '@gmail.com';
    let alertlogin = document.getElementById('alertlogin');

    // Clear previous alert messages
    alertlogin.textContent = '';

    if (email === "") {
        alertlogin.textContent = 'Enter email address';
        return false;
    } else if (!email.endsWith(required)) {
        alertlogin.textContent = 'Email must end with @gmail.com';
        return false; 
    }
    if (password === "") {
        alertlogin.textContent = "Enter password";
        return false;
    } else if (password !== "12345678") {
        alertlogin.textContent = "Wrong Password";
        return false;
    }

    // If all validations pass
    return true;
}

function forgotpassword() {
    let email = document.getElementById('mailfp').value;
    const required = '@gmail.com';
    let alertfp = document.getElementById('alertfp');

    // Clear previous alert messages
    alertfp.textContent = '';

    if (email === "") {
        alertfp.textContent = 'Enter email address';
        return false;
    } else if (!email.endsWith(required)) {
        alertfp.textContent = 'Email must end with @gmail.com';
        return false; 
    }

    // If all validations pass
    return true;
}

function signup(){
    let name=document.getElementById('signupname').value;
    let email = document.getElementById('signupmail').value;
    let password = document.getElementById('passup').value;
    let conpassword = document.getElementById('conpassup').value;
    let alertup = document.getElementById('alertup');
    const required = '@gmail.com';
    
    alertup.textContent="";

    if(name === ""){
        alertup.textContent='Enter User Name';
        return false;
    }
    if (email === ""){
        alertup.textContent='Enter email';
        return false;
    }else if (!email.endsWith(required)){
        alertup.textContent='Email must end with @gmail.com';
        return false;
    }
    if (password === ""){
        alertup.textContent='Enter your password';
        return false;
    }else if (password.length < 8){
        alertup.textContent='Password must be atleast 8 characters';
        return false;
    }
    if (conpassword === ""){
        alertup.textContent = 'Confirm password';
        return false;
    }else if (password !== conpassword){
        alertup.textContent = 'Password do not match';
        return false;
    }
    return true;
}

function togglePasswordVisibility(inputId, iconId) {
    let passwordInput = document.getElementById(inputId);
    let icon = document.getElementById(iconId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password"; // Hide password
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}



