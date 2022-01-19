var a = 1 + 3; //4

var b = "1" + 3; //"13"

var c = "Strong" + "Engineer"; //StrongEngineer

var d = "Strong" + true; //Strongtrue

var d = "false" + false; //falsefalse

var e = "1" + true - true; //"1true"-1 = NaN

var f = "10" - false - false - true + 2; //11

var e = "Arun" + 10.1 + 20 - 98 + true; //NaN

var f = "-" + 1; //-1

var g = Number("32") + 2; //34

var h = 2 + parseInt("ankit"); //NaN

var i = "ankit" + 2 + parseInt(2) + parseFloat(33.98); //"ankit2233.98"

var j = "10" - 2; //8

var k = "100" + -20; //100-20

var l = "100" + 10 + "20" - "20" + true + true + false + -true; //1001001

// Print 1 to 10
for(let i=1; i<11;i++){
    console.log(i)
}

// Print 4 to 30
for(let i=4; i<31;i++){
    console.log(i)
}

// Print 5 to 1
for(let i=5; i>0;i--){
    console.log(i)
}

// Print even number from 1 to 100
for(let i=1; i<101;i++){
    if(i%2==0){
        console.log(i)
    }
}

// Print odd numbers from 1 to 100
for(let i=1; i<101;i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Write factorial of 10
let ans = 1
for(let i=1; i<10;i++){
    ans *= i
}
console.log(ans) //362880