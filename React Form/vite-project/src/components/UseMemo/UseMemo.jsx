import {useState,useMemo} from 'react'

const UseMemo = () => {
    const [firstName,setFirstName] = useState("")
    const [lstName,setLastName] = useState("")   

    let sum = useMemo(()=> {
        console.log("calculating")
        let value = 0
        for(let i =0; i<1000000000;i++){
            value += i
        }
        return value
    },[])

    console.log(sum)
    return (
        <>
            <h2>{sum}</h2>
            <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <input value={lstName} onChange={(e)=> setLastName(e.target.value)} />
            {firstName}
            <br/>
            {lstName}
        </>
    )   
}

export default UseMemo