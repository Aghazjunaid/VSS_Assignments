// Method-1
function segregate(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0) newArr.unshift(arr[i])
        else if(arr[i] == 1) newArr.push(arr[i])
    }
    return newArr
}

let arr = [0,1,0,1,0,0,1,1,1,0]
let result = segregate(arr)
console.log(result) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]


// Method-2
function segregate(arr){
    for(let i=0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[j] > arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]] //swap logic
            }
        }
    }
    return arr
}

let arr = [0,1,0,1,0,0,1,1,1,0]
let result = segregate(arr)
console.log(result) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

