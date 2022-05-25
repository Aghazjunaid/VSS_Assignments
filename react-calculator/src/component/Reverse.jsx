import React,{useState} from 'react'

function Reverse() {
    const [data,setData] = useState('')

    const handleChange = () => {
        let opt = data.split('').reverse().join('')
        setData(opt)
    }
    
    return (
        <>
            <p onClick={handleChange}>Input is: {data}</p>    
            <input type="text" onChange={(e)=> setData(e.target.value) } />   
        </>
    )
}

export default Reverse
