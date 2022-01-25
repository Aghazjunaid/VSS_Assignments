function recur1 (n){
    if(n==0){
        return
    }
    recur1(n-1)
    console.log(n)
}

recur1(10)

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

function recur2(n){
    if(n==3){
        return
    }
    recur2(n-1)
    console.log(n)
}

recur2(30)

// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30

function recur3(n){
    if(n==0){
        return
    }
    console.log(n)
    recur3(n-1)
}

recur3(5)

// 5
// 4
// 3
// 2
// 1

function recur4(n){
    if(n==0){
        return
    }
    recur4(n-1)
    if(n%2==0){
        console.log(n)
    }
}

recur4(100)

function recur5(n){
    if(n==0){
        return
    }
    recur5(n-1)
    if(n%2!=0){
        console.log(n)
    }
}

recur5(100)


function factorial(n){
    if(n==1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(4)) //24
console.log(factorial(10)) //3628800