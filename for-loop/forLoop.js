console.log("========================== For Loop ==========================");

// print 1 to 10 
console.log("******* print 1 to 10 *******");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// even numbers from 2 to 20
console.log("******* print Even 2 to 20 *******");
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// odd from 1 to 19
console.log("******* print Odd 1 to 19 *******");
for (let i = 1; i <= 19; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// sum of numbers from 1 to 100
console.log("******* sum of 1 to 100 *******");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of 1 to 100 =", sum);
// table of 5
console.log("******* Table of 5 *******");
let TabelNo = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${TabelNo} x ${i} =`, TabelNo * i);
}
//factorial of number
console.log("******* Factorial of 5 *******");
let fac = 1;
for (let i = 1; i <= 5; i++) {
    fac *= i;
}
console.log("factorial of 5 =", fac);
//reverse a string 
console.log("******* Reverse a string *******");
let str = "sagar";
let reverse = ""
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log("Orignal string is =", str);
console.log("reverse string is =", reverse);
// Print elements of array
console.log("******* Elements of array *******");
let arr = ['sagar', 'shubham', 'manan', 'sahil']
console.log(`['sagar','shubham','manan','sahil']`);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// count from 10 to 1
console.log("******* Count from 10 to 1 *******");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// print square of 1 to 10
console.log("******* Square of 1 to 10 *******");
for (let i = 1; i <= 10; i++) {
    console.log(`Square of ${i} =`, i * i);
}