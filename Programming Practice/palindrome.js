// Check Palindrome

// Logic-1
// Steps
// 1- convert string into array
// 2- reverse the array
// 3- convery array into string and store its value in another variable
// 4- Compare both strings

// let str1 = "aghaz";
// let str2 = str1.split("");
// let str3 = ""
// for(let i=0; i< str2.length; i++){
//     str3 = str2[i]+str3
// }
// if(str1===str3){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }

//Not Palindrome

// Logic-2
// let str1 = "anna";
// let str3 = ""
// for(let i=0; i< str1.length; i++){
//     str3 = str1[i]+str3
// }
// if(str1===str3){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }

//Palindrome

// Logic-3 (Using Recursion)
function reverse (str) {
    if (str === "") {
        return "";
    }
    let aj = reverse(str.substr(1));
    let opt = str.charAt(0)
    return aj + opt
}

let str1 = "abc"
let str2 = reverse(str1)
if(str1===str2){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}

// Not Palindrome