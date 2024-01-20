// program to check if a number is a float or integer value

// Get button element and add click event listener on it and assign to element variable.
const element = document.getElementById("myBtn");

element.addEventListener("click", checkNumber);


function checkNumber(e) {
    e.preventDefault();

    // Take input value from the user and convert it into a number.
    let inputValue = document.getElementById("inputValue").value;

    console.log(`Input value is : ${inputValue}`);
    console.log(`Input value data type is : ${typeof inputValue}`);

    // check if the passed value is a number
    // The typeof operator is used to check the data type of the passed value.
    // The isNaN() method checks if the passed value is a number.

    // Check the input field is not a blank.
    if (inputValue) {

        inputValue = Number(inputValue);
        console.log(`Input value data type is : ${typeof inputValue}`);


        if (typeof inputValue === 'number' && !isNaN(inputValue)) {

            // check if it is integer
            // The Number.isInteger() method is used to check if the number is an integer value.
            if (Number.isInteger(inputValue)) {

                document.querySelector('#h5').innerHTML = `Result : ${inputValue} is integer value.`;

                console.log(`${inputValue} is integer value.`);

            } else {

                document.querySelector('#h5').innerHTML = `Result : ${inputValue} is a float value.`;

                console.log(`${inputValue} is a float value.`);

            }

        } else {

            document.querySelector('#h5').innerHTML = `Result : ${inputValue} is not a number.`;
            console.log(`${inputValue} is not a number.`);

        }

    } else {

        document.querySelector('#h5').innerHTML = `Please enter the value.`;
        console.log(`Please enter the value.`);

    }

}