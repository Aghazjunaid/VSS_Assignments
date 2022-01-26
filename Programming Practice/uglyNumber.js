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

    let uglyThNumber = 1
    let count = 1
    while(count < n){
        let processedNum = checkUgly2(uglyThNumber)
        processedNum = checkUgly3(processedNum)
        processedNum = checkUgly5(processedNum)

        if(processedNum == 1){
            count += 1
        }
        uglyThNumber++
    }
    return uglyThNumber
}

console.log(uglyNumber(15))