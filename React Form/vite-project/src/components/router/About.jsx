import React ,{memo, useEffect}from 'react'
import {useSearchParams} from 'react-router-dom';

function About() {
    const [query] = useSearchParams()
    useEffect(()=>{
        const searchParam = Object.fromEntries([...query]) //http://localhost:3000/about?age=12&&name=aj
        console.log(searchParam) //{age: '12', name: 'aj'}
    },[])
    return (
        <div>
            Im About
        </div>
    )
}

export default About
