console.log("========================== Do while Loop ==========================");
// print 1 to 10 
console.log("******* print 1 to 10 *******");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10)
// even numbers from 2 to 20
console.log("******* print Even 2 to 20 *******");
let n = 1;
do {
    if (n % 2 == 0) {
        console.log(n);
    }
    n++;
} while (n <= 20);
// odd from 1 to 19
console.log("******* print Odd 1 to 19 *******");
let odd = 1;
do {
    if (odd % 2 != 0) {
        console.log(odd);
    }
    odd++;
} while (odd <= 20);
// sum of numbers from 1 to 100
console.log("******* sum of 1 to 100 *******");
let sum = 0;
let sno = 1;
do {
    sum += sno;
    sno++;
} while (sno <= 100);
console.log("Sum of 1 to 100 =", sum);

// table of 5
console.log("******* Table of 3 *******");
let table = 3;
let tableno = 1;
do {
    console.log(`${table} x ${tableno} =`, table * tableno);
    tableno++;
} while (tableno <= 10)
//factorial of number
console.log("******* Factorial of 5 *******");
let fact=1;
let facno=1;
do{
    fact*=facno;
    facno++;
}while(facno<=5)
    console.log("factorial of 5 is =",fact);
    
//reverse a string 
console.log("******* Character of string *******");
let str="looping"
let s=0;
do{
    console.log(str[s]);
    s++;
}while(s<str.length);

// count from 10 to 1
console.log("******* Count from 10 to 1 *******");
let q = 10;
do{
    console.log(q);
    q--;
}while(q>=1);

//print at least once if condition is false
w=1;
console.log("******* Runs at least once *******");
do{
    console.log("This is false");
}while(w==2);

//print array values
console.log("******* Array Elements *******");
let arr=["sagar","manan","shuabham","sahil"];
let a=0;
do{
    console.log(arr[a]);
    a++;
}while(a<arr.length)
    