// Algorithm
// Step-1 Create a function which takes one argument
// step-2 Create loop Which iterate to argument times
// Step-3 write condition if completely divided by 15 print FizzBuzz
// Step-4 write condition if completely divided by 5 print Buzz
// Step-5 write condition if completely divided by 3 print Fizz
// Step-6 if all condition fails simply print number

function fizzBuzz(n){
    for(let i = 1; i<=n ; i++){
        if(i%15 == 0) console.log("FizzBuzz")
        else if(i%5 == 0) console.log("Buzz")
        else if(i%3 == 0) console.log("Fizz")
        else console.log(i)        
    }
}

fizzBuzz(30)

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz