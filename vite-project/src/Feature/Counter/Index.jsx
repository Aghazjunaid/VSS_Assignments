import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch(); 
    const count = useSelector(state => state.myCounter.count)
    
    return (
        <>
            {count}
            <button onClick={() => dispatch({type: "INCREMENT_COUNT"})}>INC</button>
            <button onClick={()=> dispatch({type: "DECREMENT_COUNT"})}>DEC</button>
        </>
    )
}

export default Counter