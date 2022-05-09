import React ,{memo}from 'react'

function Child() {
    console.log("child comp")
    return (
        <div>
            Im child
        </div>
    )
}

export default memo(Child)
