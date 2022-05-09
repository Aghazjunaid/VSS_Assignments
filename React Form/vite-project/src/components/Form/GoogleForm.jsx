import React,{useEffect, useState} from "react"

const GoogleForm = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordLengthError, setPasswordLengthError] = useState('')

    useEffect(()=>{
        if(name === ''){
            setNameError("Please Enter Name")
        }else{
            setNameError("")
        }
    },[name])

    useEffect(()=>{
        if(password === ''){
            setPasswordError("Please Enter Password")
        }else{
            setPasswordError("")
        }
    },[password])

    function submitForm(){
        if(password.length < 8){
            setPasswordLengthError("Password must contains 8 character")
        }else{
            setPasswordLengthError('')
            console.log({name,password})
            setName('')
            setPassword('')
        }
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <span style={{color:"red"}}>{nameError}</span>
            </div>
            <div>
                <input type="text" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span style={{color:"red"}}>{passwordError}{passwordLengthError}</span>
            </div>
            <button onClick={submitForm}>Submit</button>
        </>
    )
}

export default GoogleForm