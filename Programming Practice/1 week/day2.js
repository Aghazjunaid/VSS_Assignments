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