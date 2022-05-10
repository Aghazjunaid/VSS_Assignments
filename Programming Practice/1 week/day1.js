// //Remove Duplicate characters from String
// function removeDuplicateCharacters() {
//     const string='priya riya supriya'
//     let str = string.split('')
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//             if(str[i] === str[j]){
//                 str.splice(j--,1)
//             }
//         }
//     }
//     return str.join('')
// }
// console.log(removeDuplicateCharacters()); //priya su

// //Remove Duplicate characters from array of element and find the count of an elements using set
// var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
// const obj = [...new Set(arr)]
// console.log(obj) //[55, 44, 67, 8, 65, 1, 2, 3, 34, 5]

// //Remove Duplicate characters from array of element using filter
// var myArray = ['a', 1, 'a', 2, '1'];
// var unique = myArray.filter((value, index, arr) => arr.indexOf(value) === index);

// //String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.
// var string ="India is my country"
// let newStr= ''
// for(let i=0;i<string.length;i++){
//     newStr = string[i] + newStr
// }
// console.log(newStr)//"yrtnuoc ym si aidnI"
// //OR
// function Reverse(){
//     var string ="India is my country";
//     var result="";
//     for( var i=string.length-1; i>=0 ; i-- ) {
//        result=result+string[i] }
//     return result
//  }
//  console.log(Reverse()) //"yrtnuoc ym si aidnI"

// //Find factorial of user input number
// let num=1
// for(let i=2;i<=5;i++){
//     num *= i
// }
// console.log(num)

// //Check if a string is an Anagram
// var a="army";
// var b="mary"
// console.log(a.toLowerCase().split('').sort().join(''))
// console.log(b.toLowerCase().split('').sort().join(''))
// //OR
// let obj={}
// for(let i=0;i<a.length;i++){
//     if(a[i] in obj){
//         obj[a[i]] += 1
//     }else{
//         obj[a[i]] = 1
//     }
// }
// console.log(obj)
// for(let i=0;i<b.length;i++){
//     if(b[i] in obj){
//         obj[b[i]] -= 1
//     }else{
//         console.log(false)
//     }
// }
// console.log(obj)

// //Swapping of 2 numbers with third variable
// let a=2
// let b=3
// let temp = a
// a = b
// b = temp
// console.log(a,b)

// //Swapping of 2 numbers without third variable
// let a = 5
// let b = 6;
// [a, b] = [b, a];
// console.log(`${a} ${b}`);

// //To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
// function checkPalindrome(){
//    const string = "12321"
//    let len = string.length;
//    for (i=0; i<len/2;i++){
//      if (string[i]!==string[len-1-i]){
//          console.log("Not Palindrome")
//      }
//      else{
//          console.log(" Palindrome")
//     }
//    }
// }
// checkPalindrome()

// //To find longest word from a string using (for of Loop) means iterate by an elements not by indexing
// function longestWord(){
//    let string = "supriya is a hahahahaha good girl"
//    var arr= string.split(' ')
//    var longest=" "
//    for(var i=0; i<arr.length; i++){
//       if(arr[i].length > longest.length){
//           longest = arr[i]
//       }
//    }
//    return longest
// }
// console.log(longestWord()) //hahahahaha

// //To find longest word from a string using functions
// let string = "supriya is a hahahahaha good girl"
// let result = string.split(" ").sort((a,b) => b.length-a.length)
// console.log(result[0]) //hahahahaha

// //To find vowels and its count in a given string
// let opt = "aghaz junaid"
// const obj ={}
// for(let i=0;i<opt.length;i++){
//     if(opt[i] in obj){
//         obj[opt[i]] += 1
//     }else{
//         obj[opt[i]] = 1
//     }
// }
// console.log(obj) //{ a: 3, g: 1, h: 1, z: 1, ' ': 1, j: 1, u: 1, n: 1, i: 1, d: 1 }

// //To find longest common string from array of strings
// function longestCommonString(){
//     const array=["go","google","gosh"]
//     let ans = ''
//     for(let i=0;i<array.length;i++){
//         let bol = true
//         let value= array[i]
//         for(let j=0;j<array.length;j++){
//             if(!array[j].includes(array[i])){
//                 bol = false
//                 break
//             }
//         }
//         if(bol) ans=value
//     }
//     console.log(ans) //go
// }
//   longestCommonString() 

// //To find character occurance from the string
// const str= "priyapri"
// count = 0
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i) == "p") ++count
// }
// console.log(count) //2

// //To find a first pair from a number array whose sum is zero
// let arr = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] == 0){
//             console.log([arr[i],arr[j]])
//         }
//     }
// }
// // [ -5, 5 ]
// // [ -4, 4 ]
// // [ -3, 3 ]
// // [ -2, 2 ]
// // [ -1, 1 ]

// //To find a first pair from a number array whose sum is zero using indexing
// let arr = [-5,-4,-3,-2,-1,0,2,4,6,8]
// let r = arr.length-1
// let l = 0

// while(l<r){
//     if(arr[l]+arr[r] > 0){
//         r--
//     }else if(arr[l]+arr[r]<0){
//         l++
//     }else{
//         console.log(arr[l],arr[r])
//         l++
//         r--
//     }
// }
// // -4 4
// // -2 2

// //To find the largest pair of the 2 elements using indexing with unsorted elements
// function largestPairSumofTwo(numbers){
//     const num = numbers.sort((a, b) => b - a);
//     return num[0] + num[1];
// }
// const result = largestPairSumofTwo([9,7,8,4,5,6,1,2,3])
// console.log(result) //17

