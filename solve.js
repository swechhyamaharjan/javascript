 //cube

// function cube(side){
//     let totalsurfacearea = 6 * side * side;
//     let volume = side * side * side;
//     return totalsurfacearea + " and " + volume;
// }
// console.log("The TSA and volume of cube are" ,cube(9));

//sphere

// function sphere(r){
//     let volume = 4/3 * 3.14 * r * r * r;
//     return volume;
// }
// console.log("The volume of sphere is" ,sphere(9))

//or

// function sphere(radius){
//     volume = (4/3) * Math.PI * Math.pow(radius, 3);
//     return volume;
// }
// console.log(sphere(9));

//four walls
// function fourWalls(l, b, h){
//     area = 2 * (l + b) * h;
//     return area;
// }
// console.log("The area of 4 walls is" ,(fourWalls(2, 3, 4)))

//cuboid

// function cuboid(l, w, h){
//     let totalsurfacearea = 2 * (l*w + w*h + h*l);
//     let volume = l * w * h;
//     return totalsurfacearea + " and " + volume;
// }
// console.log("The TSA and volume of cuboid is" ,cuboid(2, 3, 4))

// triangle

// function triangle(b, h){
//     area = 1/2 * b * h;
//     return area;
// }
// console.log("The area of triangle is" ,triangle(10, 10))

//rectriangle

// function rectriangle(a, b){
//     area = a * b;
//     return area;
// }
// console.log("The area of rectriangle is" ,rectriangle(5, 5))

//circle

// function circle(r){
//     let circumference = 2 * Math.PI * r;
//     let area = Math.PI * Math.pow(r, 2);
//     return circumference + " " + area;
// }
// console.log("The result would be" ,circle(7))

//triangle with 3 sides

// function triangle(s1, s2, s3){
//    let s = (s1 + s2 + s3) / 2;
//    let area = Math.sqrt(s * (s-s1) * (s-s2) * (s-s3));
//     return area
// }
// console.log("The area of triangle with 3 sides given is" ,triangle(2, 3, 4))

//distance in miles

// function distance(distanceinkm){
//     let distanceinmiles = distanceinkm * 0.621371;
//     return distanceinmiles;
// }
// console.log(distance(25))

// function distance(distanceInMeter){
//     kilometer = distanceInMeter / 1000;
//     meter = distanceInMeter % 1000;
//     return kilometer + " " + meter;
// }
// console.log(distance(2000))

//Potential energy

// function energy(mass, height){
//     let potentialEnergy = mass * 9.18 * height;
//     return potentialEnergy;
// }
// console.log("The potential energy is" ,energy(2, 3))

//print the sum of n natural numbers
// function numbers(n){
//     var sum = 0;
//     for (var i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(numbers(5));

//print the sum of square of first n natural numbers
// function numbers(n){
//     var sum = 0;
//     for(var i=1; i<=n; i++){
//         sum += i * i;
//     }
//     return sum;
// }
// console.log(numbers(5));

function passOrfail(english, chemistry, biology, physics){
    var totalMarks = english + chemistry + biology + physics;
    if(totalMarks >= 40){
        return "You're pass"
    }
    else{
        return "You're fail"
    }
}
console.log(passOrfail(50, 30, 20, 56));
