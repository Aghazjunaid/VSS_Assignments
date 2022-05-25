import {useState} from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(false)

    const showToggle = () => {
        if(toggle){
            return <h3>Welcome</h3>
        }
        return <h3>Not Welcome</h3>
    }

    return(
        <>
            {showToggle()}
            <button onClick={()=> setToggle(!toggle)}>Toggle</button>
        </>
    )
}

export default Toggle