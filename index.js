       // 1. ways to print in javascript

// console.log("Hello World");
// alert("hye there")
// document.write("this is a document");

       // 2. console API

// console.warn("This is a warning");
// console.log("This is website");
// console.error("there is an error");

       // 3. Javascript variables

        //   variables are the containers to store the values

//  var a = 45;
//  var b = 19;
//  c = a + b;
//  console.log("The result of a and b is" ,c)
 
       //4.Data types in javascript

    /*
There are two types of data types which are:
Primitive data types: undefined, null, boolean, numbers, string, symbol
Reference data types: arrays and objects

 1)String

var str1 = "This is a string."
var str2 = "This is another string"
console.log(str1, str2);
    
2)Numbers

var num1=43;
var num2=34;
console.log(num1 * num2);

3)Objects

var marks = {
     ram: 45,
     shyam: 88,
     radha: 56,
     rita: 100,
 }
 console.log(marks);

4)Booleans

 var a = true;
 var b = false;
 console.log(a, b);

5) undefined and null

 var und = undefined;
 console.log(und)

 var und;
 console.log(und)

 var n = null;
 console.log(n)

5) Arrays

var arr = [1, 3, 5, "swekchya", 8, 9]
console.log(arr[3]);
*/

       // 5. Operators in javascript

//1. Arthmetic operators 

// var a = 34;
// var b = 56;
// console.log("The value of a and b is" ,a + b);
// console.log("The value of a and b is" ,a - b);
// console.log("The value of and b is" , a * b);
// console.log("The value of and b is" , a / b);

// 2. Assignment Operators

// var c = b;
// c += 3;
// console.log(c);

// 3. Logical Operators

//And operators: must be true for both
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//OR Operators: must be true if any one is true
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Not Operators: Opposite
// console.log(!true)
// console.log(!false)

// 4. Comparision Operators

// var a = 5;
// var b = 9;
// console.log(a == b);
// console.log(a<b);
// console.log(a>b);

       //6. Fucntions in javascript

// function avg(b, h){
//     return 1/2 * b * h;
// }
// result = avg(10, 10)
// console.log("The area of triangle is" ,result);

// if the console's output is blue then it is number 
// if the console's output is black then it is string 

       //7. conditionals in javascript

//if condition
// var age = 45;
// if(age > 30){
//     console.log("You are going to be 50 soon:(");
// }

//if else condition
//  var age = 45;
//  if (age < 16){
//     console.log("You are being old.")
//  }
//  else{
//     console.log("You are still youth.")
//  }

// else if ladder conditon
// var age = 2;
// if(age > 4){
//     console.log("The number is greater");
// }
// else if(age < 1){
//     console.log("The number is lesser");
// }
// else if(age > 7){
//     console.log("This will be true");
// }
// else{
//     console.log("Neither of the following condition is correct");
// }
// console.log("The conditional will be now ended.")

       //8. Loops in javascript

 //for loop
// var arr = [1, 2, 3, 4, 5]
// console.log(arr);
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// arr.forEach(function(element){
//     console.log(element)
// })

//while loop
// let arr = [2, 3, 4, 5, 6]
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do while loop
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let j = 0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

//break and continue
// let arr = [1,2,3,4,5,6,7];
// for (let i = 0; i< arr.length; i++){
//     if(i==4){
//         break;
//     }
//     console.log(arr[i]);
// }


//So, continue loop will skip the next element only.
// let arr = [1,2,3,4,5,6,7];
// for (let i=0; i<arr.length; i++){
//     if(i==4){
//         continue;
//     }
//     console.log(arr[i])
// }




