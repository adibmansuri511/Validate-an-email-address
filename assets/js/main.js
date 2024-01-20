// program to validate an email address

// Get button element and add click event listener on it and assign to element variable.
const element = document.getElementById("myBtn");

element.addEventListener("click", validateEmail);



function validateEmail(e) {
    e.preventDefault();

    // Take input value from the user.
    const email = document.getElementById("email").value;

    // Show the result on this #h5 id.
    let result = document.querySelector('#h5');

    const regexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexPattern.test(email)) {

        console.log(`${email} is valid email address.`);
        // result.classList.add("input-color");
        // result.innerHTML = `${email} is valid email address.`;
        result.innerHTML = `<span style="color: #000;">${email}</span> is valid email address.`;


    } else {

        console.log(`${email} is not valid email address.`);
        result.innerHTML = `<span style="color: #000;">${email}</span> is not valid email address.`;

    }
};