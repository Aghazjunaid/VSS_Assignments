import { useState, useEffect } from "react"

const Ue1 = ()=>{
    const [profile,setProfile] = useState({
        name: "",
        age: 0
    })

    useEffect(()=>{
        console.log("everytime")
    })

    useEffect(()=>{
        console.log("1 time")
    },[])

    useEffect(()=>{
        console.log("dependency array")
    },[profile.age])

    return (
        <>  
<h3>            {profile.name}
</h3>
<h3>
{profile.age}
</h3>
            <input type={"text"} value={profile.name} onChange={(e)=> setProfile({
                ...profile, name:e.target.value
            })} />
            <input type={"number"} value={profile.age} onChange={(e)=> setProfile({
                ...profile, age:e.target.value
            })} />
        </>
    )
}

export default Ue1