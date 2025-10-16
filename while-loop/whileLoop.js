console.log("========================== while Loop ==========================");
// print 1 to 10 
console.log("******* print 1 to 10 *******");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}
// even numbers from 2 to 20
console.log("******* print Even 2 to 20 *******");
let eveni = 1;
while (eveni <= 20) {
    if (eveni % 2 == 0) {
        console.log(eveni);
    }
    eveni++;
}
// odd from 1 to 19
console.log("******* print Odd 1 to 19 *******");
let oddi = 1;
while (oddi <= 20) {
    if (oddi % 2 != 0) {
        console.log(oddi);
    }
    oddi++;
}
// sum of numbers from 1 to 100
console.log("******* sum of 1 to 100 *******");
let sum = 0;
let n = 1;
while (n <= 100) {
    sum += n;
    n++;
}
console.log("the sum of 1 to 100 =", sum);

// table of 7
console.log("******* Table of 7 *******");
let tableNo = 7;
let no = 1;
while (no <= 10) {
    console.log(`${tableNo} x ${no} =`, tableNo * no);
    no++;
}
//factorial of number
console.log("******* Factorial of 5 *******");
let fac = 1;
let facNo = 1;
while (facNo <= 5) {
    fac *= facNo;
    facNo++;
}
console.log("factorial of 5 =", fac);
//print chracter of string
console.log("******* print characters *******");
let word="javascript";
let w=0;
while(w<word.length){
    console.log(word[w]);
    w++
}
// count from 10 to 1
console.log("******* Count from 10 to 1 *******");
let q = 10;
while (q >= 1) {
    console.log(q);
    q--
}
//Print numbers until a condition is met
console.log("******* print until condition is match *******");
let No=1;
while(true){
    console.log(No);
    if(No>=5){
        break;
    }
    No++;
}
//print array elements
console.log("******* print array elements *******");
let arr=[1,2,4,5,6,3,5];
let s=1;
console.log(`[1,2,4,5,6,3,5]`);

while(s<arr.length){
    console.log(arr[s]);
    s++;
}