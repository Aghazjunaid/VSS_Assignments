import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';

function Calculator() {
    const [input,setInput] = useState({
        num1: 0,
        num2: 0
    })

    const result = useSelector(state => state.myCalculator.result)

    const dispatch = useDispatch()
    console.log(input)

    return (
        <>
            <input type='number' value={input.num1} onChange={(e) => {setInput({...input, num1: parseInt(e.target.value)})}} />
            <input type='number' value={input.num2} onChange={(e) => {setInput({...input, num2: parseInt(e.target.value)})}} />
            <div>
                <button onClick={() => dispatch({type:"ADD_NUMBER", payload: input})}>ADD</button>
                <button onClick={() => dispatch({type:"SUBSTRACT_NUMBER", payload: input})}>SUBSTRACT</button>
                <button onClick={() => dispatch({type:"MULTIPLY_NUMBER", payload: input})}>MULTIPLY</button>
                <button onClick={() => dispatch({type:"DIVIDE_NUMBER", payload: input})}>DIVIDE</button>
            </div>
            <h3>Result : {result}</h3>
        </>
    )
}

export default Calculator
