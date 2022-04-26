import React,{useEffect, useState} from "react"

const Types = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);

    //It will render each time and initially
    useEffect(() => {
        console.log("LN 8 useEffect with no render");
    })

    useEffect(() => {
        console.log("LN 12 useEffect with [] render");
    },[])

    //it will render only when name state is updating and initially
    useEffect(()=>{
        console.log("LN 16 useEffect with [name] render");
    },[name])

    function handleChange(e){
        setAge(e.target.value)
    }

    return(
        <>
            <h1>Hello</h1>
            <input name={name} type="text" onChange={(e) => setName(e.target.value)} />
            <input age={age} type="number" onChange={handleChange} />
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </>
    )
}

export default Types