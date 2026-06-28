// let name = "My name is Riya";
// var age = "I am 20 year old";
// const city = "I live in Kota";
// console.log(name+" "+age+" "+city);


// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// let n = 45;
// if(n % 2 == 0){
//     console.log("EVEN");
// }
// else{
//     console.log("ODD");
// }

// let num = -4;
// if(num > 0){
//     console.log("Positive");
// }
// else{
//     console.log("Negative Number");
// }


// const a = 13;
// const b = 34;
// let c = 21;
// if(a > b && a > c){
//     console.log("a");
// }
// else if(b > c && b > a){
//     console.log("b");
// }
// else{
//     console.log("c");
// }


// let marks = 32;
// if(marks > 90){
//     console.log("A");
// }
// else if(marks > 75){
//     console.log("B");
// }
// else if(marks > 60){
//     console.log("C");
// }
// else if(marks > 40){
//     console.log("D");
// }
// else{
//     console.log("Fail");
// }

// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log("5"+"*"+i+"="+5*i);
// }

// let sum = 0;
// for(let i=0;i<=100;i++){
//     sum += i;
// }
// console.log(sum);


// let n = 12345;
// let rev = 0;

// while(n != 0){
//     let ld = n % 10;
//     rev = rev * 10 + ld;
//     n = Math.floor(n / 10);
// }

// console.log(rev);

// let n = 121;
// let rev = 0;
// let original = n;
// while(n > 0){
//     let ld = n % 10;
//     rev = rev*10 +ld;
//     n = Math.floor(n / 10);
// }
// if(rev == original){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not");
// }

// function greetName(name){
//     console.log(name);
// }
// greetName("Riya");


//USER PROFILE ANALYZER
// let user = {
//     "name":"Riya",
//     age:20,
//     marks:85,
//     isStudent:true
// }

// if(user.age >= 18){
//     console.log("Adult");
// }

// if(user.marks > 85){
//     console.log("A");
// }
// else if(user.marks >= 75){
//     console.log("b");
// }
// else if(user.marks >= 60){
//     console.log("C");
// }
// else{
//     console.log("D");
// }

// if(user.isStudent){
//     console.log("Student h");
// }

// function calculate(a,b,operator){
//     if(operator == '+') return a + b;
//     else if(operator == '-') return a-b;
//     else if(operator == '*') return a*b;
//     else if(operator == '/') return a/b;
//     else return "Invalid operator";
// }

// console.log(calculate(10,5,"+"));
// console.log(calculate(10,5,"*"));

// let str = "Javascript";
// let freq = {};
// for(let ch of str){
//     if(freq[ch]){
//         freq[ch]++;
//     } else{
//         freq[ch] = 1;
//     }
// }
// console.log(freq);

// function add(a,b){
//     console.log(a+b);
// }
// add(5,3);

// function isPrime(num){
//     for(let i=2;i<=num;i++){
//         if(Math.floor(num%i) == 0){
//             return false;
//         }
//         else{
//             return true;
//         }
//     }
// }

// let boll = isPrime(3);
// console.log(boll);

// const sq = (num) => {
//     return num*num;
// }
// console.log(sq(5));

// let arr = [10,20,30,40,50];
// console.log(arr.length);
// console.log(arr.pop());
// console.log(arr.unshift());

// let arr = [10,20,30,40,50]
// let sum = 0;
// for(let su of arr){
//    sum += su
// }
// console.log(sum);

// const arr = {
//     name:"Riya",
//     "age":19,
//     marks:90
// }

// arr.city = "Kota";
// console.log(arr);

// let arr = [1,2,3,4];
// const a = arr.map((n)=>{
//     return n*2;
// });
// console.log(a);

// let arr = [1,2,3,4,5,6,7,8];
// let even = arr.filter((num)=>{
//     return num % 2 == 0;
// });
// console.log(even);

// let arr = [10,50,20,90,30]
// let max = arr.reduce((largest,num)=>{
//     if(num>largest){
//         largest = num;
//     }
//     return largest;
// },0);
// console.log(max);


// let arr = [10,20,30,40,50];
// arr.forEach((num)=>{
    // console.log(num);
// })

// let arr = [10,20,30,40];
// let res = arr.find((num)=>{
//     return num>20;
// });
// console.log(res);

// let arr = [10,20,30];
// let res = arr.includes(20);
// console.log(res);

// let arr = [50,20,10,30,20];
// let so = arr.sort();
// console.log(so);

let heading = document.getElementById("title");
console.log(heading);