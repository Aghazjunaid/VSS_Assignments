import { useState, useMemo } from 'react'

const UseMemo = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    
    let value = useMemo(()=> {
        console.log("rendering")
        let sum = 0
        for(let i=0;i<1000;i++){
            sum += i
        }
        return sum
    },[name])

    return (
        <>
        {value}
            <input value={name} onChange={(e)=> setName(e.target.value)} />
            <input value={age} onChange={(e) => setAge(e.target.value)} />
        {name}
        <br/>
        {age}
        </>
    )   
}

export default UseMemo