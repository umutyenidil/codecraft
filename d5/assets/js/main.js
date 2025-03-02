// define regex for client input validation
const reAlpha = /^[A-Za-zÇĞİÖŞÜçğıöşü' -]+$/;
const reNumber = /^\d+$/;

let firstName;
let validFirstName = false;
do {
    firstName = prompt("What is your name?");

    if (!firstName) {
        alert("Please enter a valid first name");
        continue;
    }

    validFirstName = reAlpha.test(firstName);

    if (!validFirstName) {
        alert("Please enter a valid first name");
    }

} while (!validFirstName);

let lastName;
let validLastName = false;
do {
    lastName = prompt("What is your last name?");

    if (!lastName) {
        alert("Please enter a valid last name");
        continue;
    }

    validLastName = reAlpha.test(lastName);

    if (!validLastName) {
        alert("Please enter a valid last name");
    }

} while (!validLastName);

let age;
let validAge = false;
do {
    age = prompt("How old are you?");

    if (!age) {
        alert("Please enter a age");
        continue;
    }

    validAge = age > 0;

    if (!validAge) {
        alert("Please enter a valid age");
    }

} while (!validAge);

let job;
let validJob = false;
do {
    job = prompt("What is your job?");

    if (!job) {
        alert("Please enter a valid job");
        continue;
    }

    validJob = reAlpha.test(job);

    if (!validJob) {
        alert("Please enter a valid job");
    }

} while (!validJob);

const user = {
    firstName,
    lastName,
    age,
    job
};

console.log(JSON.stringify(user));

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 },
    { name: "Smartwatch", price: 250 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 300 },
    { name: "Mouse", price: 50 },
    { name: "External SSD", price: 200 },
    { name: "Printer", price: 400 }
];

products.forEach(product => {
    console.log(`${product.name} ($fasdfa${product.price})`)
});

