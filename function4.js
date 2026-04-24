function checkAge(age){
    if (age >= 18){
        return true;
    } else {
        return confirm('Do you have permission from your parent?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)){
    console.log("Access granted");
} else {
    console.log("Access not granted");
}