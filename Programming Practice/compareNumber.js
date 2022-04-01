const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [4,5,1,3,2]

let obj= {}

for(let i=0;i<arr1.length;i++){
    if(obj[arr1[i]]){
        obj[arr1[i]] += 1
    }else{
        obj[arr1[i]] = 1
    }
}

for(let i=0;i<arr2.length;i++){
    if(obj[arr2[i]]){
        obj[arr2[i]] += 1
    }else{
        obj[arr2[i]] = 1
    }
}

for(let [key,value] of Object.entries(obj)){
    console.log(`${key} appears ${value} times`)
}

// 1 appears 2 times
// 2 appears 2 times
// 3 appears 2 times
// 4 appears 2 times
// 5 appears 2 times
// 6 appears 1 times
// 7 appears 1 times
// 8 appears 1 times