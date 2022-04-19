import React from 'react';

const FunctionalForm = () => {
    return (
        <>  
           <div style={{display:"flex", alignItems:"center", flexDirection:"column",gap:"15px", marginTop:"20px"}}>
                <div>
                    <input type={"text"} placeholder="Enter first name" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter last name" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                    <input type={"number"} placeholder="Enter age" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter address" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter city" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter state" style={{width:"500px", height:"40px"}}/>
                </div>
                <div>
                        <h3>First name :</h3>
                        <h3>First name : </h3>
                        <h3>Age : </h3>
                        <h3>Address : </h3>
                        <h3>City : </h3>
                        <h3>State : </h3>
                </div>
           </div>
        </>
    )
}

export default FunctionalForm