const kate = ["rohit","farhan","aj","naz","aayat"]

const isFriend = (kate,name) =>{
    let data = kate.find(ele => ele === name)
    if(data) return true
    return false
}

let result = isFriend(kate,"ram") 
console.log(result) //false