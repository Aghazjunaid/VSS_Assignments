import {useState} from 'react'
import Toggle from './toggle'
import UseState2 from './useState2'

const UseState = () => {
    const [counter, setCounter] = useState(0)

    const incCount = ()=> {
        if(counter === 10){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }

    const decCount = ()=> {
            setCounter(counter-1)
    }

    return (
        <>
        <h1>USE STATE</h1>
            {counter}
            <button onClick={incCount}>INC</button>
            <UseState2 decCount = {decCount}/>
            <Toggle/>
        </>
    )
}

export default UseState