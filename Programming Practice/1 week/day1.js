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

//To find longest word from a string using functions
