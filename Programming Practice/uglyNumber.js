function checkUgly2(num){
    while(num%2==0){
        num = num/2
    }
    return num
}

function checkUgly3(num){
    while(num%3==0){
        num = num/3
    }
    return num
}

function checkUgly5(num){
    while(num%5==0){
        num = num/5
    }
    return num
}

function uglyNumber(n){

    let arr = []
    let uglyThNumber = 1
    let count = 1
    while(count <= n){
        let processedNum = checkUgly2(uglyThNumber)
        processedNum = checkUgly3(processedNum)
        processedNum = checkUgly5(processedNum)

        if(processedNum == 1){
            arr.push(uglyThNumber)
            count += 1
        }
        uglyThNumber++
    }
    return arr
}

console.log(uglyNumber(15))
//[1,  2,  3,  4,  5,  6, 8, 9, 10, 12, 15, 16, 18, 20, 24]