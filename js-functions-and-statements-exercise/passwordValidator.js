function passwordValidator(pass) {

    let isPassValid = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isPassValid = false;
    } 
    
    let isChar = true;
    
    for (let ch of pass) {
        if (ch.match(/[A-za-z0-9]/g) === null) {
            isChar = false;
        }
    }

    if (!isChar) {
        console.log("Password must consist only of letters and digits");
        isPassValid = false;
    }
    
    let count = 0;
    for (let char of pass) {

        if (char.match(/[0-9]/) != null) {
            count++;
        }
    }
    
    if (count < 2) {
        console.log("Password must have at least 2 digits");
        isPassValid = false;
    }

    if (isPassValid) {
        console.log('Password is valid')
    }
}

passwordValidator('MyPass123')