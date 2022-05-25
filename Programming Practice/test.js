function findPalindrome(str){
    let arr = []
    for(let i=0; i<str.length;i++){
        for(let j=i; j<str.length;j++){
            arr.push(str.slice(i,j+1))
        }
    }
    console.log(arr) //[ 'n', 'na', 'naz', 'a', 'az', 'z' ]

    let lstr = ""
    for(let k=0;k<arr.length;k++){
        let opt = arr[k].split("").reverse().join("")
        if(opt.length > lstr.length && opt === arr[k]){
            lstr = arr[k]
        }
    }
    return str
}

console.log(findPalindrome("forgeeksskeegfor"))