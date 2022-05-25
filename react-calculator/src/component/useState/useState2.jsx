import UseState from "./useState"
import {useState} from 'react'

const UseState2 = (props) => {
    // console.log(props.decCount)
    
    return (
        <>
            <button onClick={()=> props.decCount()}>DEC</button>
        </>
    )
}

export default UseState2