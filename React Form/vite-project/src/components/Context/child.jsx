import React,{useContext} from 'react'
import { GlobalContext } from '../../App'

function Child() {
    let {color} = useContext(GlobalContext)
    console.log(color)
    return (
        <div>
            child
            {color}
        </div>
    )
}

export default Child
