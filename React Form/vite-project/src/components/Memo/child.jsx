import React ,{memo}from 'react'

function Child({counter}) {
    console.log("child comp")
    return (
        <div>
            Im child
            {counter}
        </div>
    )
}

export default memo(Child)
