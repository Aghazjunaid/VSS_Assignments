import React ,{memo}from 'react'
import {useParams} from 'react-router-dom';

function Get() {
    console.log("Get comp")
    const param = useParams()
    console.log(param)
    return (
        <div>
            Im Get
        </div>
    )
}

export default Get