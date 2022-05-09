import React,{useState} from 'react'
import Child from './child'

function Parent() {
    const [counter, setCounter] = useState(0)

    console.log("parent comp")
    return (
        <div>
            {counter}
            <button onClick={ () => setCounter(counter+1)}>Increse</button>
            <Child/>
        </div>
    )
}

export default Parent


//https://lifesaver.codes/answer/q-when-should-you-not-use-react-memo
//https://dmitripavlutin.com/use-react-memo-wisely/