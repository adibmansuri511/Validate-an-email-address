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



// function checkNumber(e) {
//     e.preventDefault();

//     // Take input value from the user and convert it into a number.
//     // const email = document.getElementById("email").value;

//     console.log(`Input value is : ${email}`);

//     // check if the passed value is a number
//     // The typeof operator is used to check the data type of the passed value.
//     // The isNaN() method checks if the passed value is a number.

//     // Check the input field is not a blank.
//     if (email) {



//         if (typeof email === 'number' && !isNaN(email)) {

//             // check if it is integer
//             // The Number.isInteger() method is used to check if the number is an integer value.
//             if (Number.isInteger(email)) {

//                 document.querySelector('#h5').innerHTML = `Result : ${email} is integer value.`;

//                 console.log(`${email} is integer value.`);

//             } else {

//                 document.querySelector('#h5').innerHTML = `Result : ${email} is a float value.`;

//                 console.log(`${email} is a float value.`);

//             }

//         } else {

//             document.querySelector('#h5').innerHTML = `Result : ${email} is not a number.`;
//             console.log(`${email} is not a number.`);

//         }

//     } else {

//         document.querySelector('#h5').innerHTML = `Please enter the value.`;
//         console.log(`Please enter the value.`);

//     }

// }