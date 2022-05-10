// //Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)
// function missingElement(){
//     let a = [1,2,5]
//     let missingArr = []
//     for(let i=1;i<a[a.length-1];i++){
//         if(a[i-1] != i){
//             missingArr.push(i)
//         }
//     }
//     console.log(missingArr)
//   }
//   missingElement()

// //Code 27: Find the missing no. in an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// for(let i=1;i<=arr.length;i++){
//     if(arr[i-1] != i){
//         console.log(i) //9
//     }
// }
// //===================OR===========================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// for (var i = 0, x=1; i < arr.length; x++,i++) {
//     if (arr[i] != x) { //index value comparing with pointer
//         console.log(x); //9
//     }
// }

// //Sorting of a string/characters
// let arr = ["d","g","y","e","r","p"]
// console.log(arr.sort())

// //Sorting of an number
// let arr = [1,23,34,2,76,78]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i] < arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
// }
// console.log(arr) //[ 1, 2, 23, 34, 76, 78 ]

// //To check if given number is prime or not
// let num = 9
// let bool = true
// for(let i=2;i<num;i++){
//     if(num%i == 0){
//         bool = false
//     }
// }
// console.log(bool) //false

// //To print all the prime numbers from 2 to 100
// for(let i=2;i<=100;i++){
//     let flag = 0
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag = 1
//             break
//         }
//     }
//     if(flag==0){
//         console.log(i)
//     }
// }

// //To find unique values from 2 arrays and keep into one array. i.e. Union.
// let arr1 = [1,2,3,4,4]
// let arr2 = [2,3,4,5,6]
// console.log([...new Set([...arr1,...arr2])]) //[ 1, 2, 3, 4, 5, 6 ]

// //Find first duplicate element from an array
// function firstDuplicate() {
//     let arr = [1,2,2,5,5];
//     let data = [];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i-1] == arr[i]){
//             data.push(arr[i])
//         }
//     }
//     return data
// }
// console.log(firstDuplicate()) //[2,5]

// //Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"
// for(let i=1;i<=100;i++){
//     if(i%3 ===0 && i%5 === 0){
//         console.log("FizzBuzz")
//     } else if(i%5===0){
//         console.log("Buzz")
//     } else if(i%3 ===0){
//         console.log("Fizz")
//     } else{
//         console.log(i)
//     }
// }

// //Uppercase of each first letter of a words
// let str = "india is my country"
// let arr = str.split(" ")
// let newArr = arr.map(ele => {
//     return ele[0].toUpperCase()+ele.slice(1)
// }).join(" ")
// console.log(newArr) //India Is My Country

