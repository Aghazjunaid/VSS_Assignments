const sam = ["aj","fame","ram","rahim","naz"]
const kate = ["rohit","farhan","aj","naz","aayat"]

const getMutualFriend = (sam,kate) => {
    let arr = []
    for(let i=0;i <sam.length;i++){
        for(let j=0; j<kate.length;j++){
            if(sam[i] === kate[j]){
                arr.push(sam[i])
                kate.splice(j,1)
            }
        }
    }
    return arr
}

let mutualFriendList = getMutualFriend(sam,kate)
console.log(mutualFriendList) // [ 'aj', 'naz' ]

