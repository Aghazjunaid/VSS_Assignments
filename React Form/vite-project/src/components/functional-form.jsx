import React,{useState} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function FunctionalForm() {
    const [firstName, setFirestName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age,setAge] = useState()
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    return (
        <>  
           {/* <div style={{display:"flex", alignItems:"center", flexDirection:"column",gap:"15px", marginTop:"20px"}}>
                <div>
                    <input type={"text"} placeholder="Enter first name" style={{width:"500px", height:"40px"}} onChange={(e) => setFirestName(e.target.value)}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter last name" style={{width:"500px", height:"40px"}} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <input type={"number"} placeholder="Enter age" style={{width:"500px", height:"40px"}} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter address" style={{width:"500px", height:"40px"}} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter city" style={{width:"500px", height:"40px"}} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div>
                    <input type={"text"} placeholder="Enter state" style={{width:"500px", height:"40px"}} onChange={(e) => setState(e.target.value)}/>
                </div>
                <div>
                        <h3>First name : {firstName}</h3>
                        <h3>First name : {lastName}</h3>
                        <h3>Age : {age}</h3>
                        <h3>Address : {address}</h3>
                        <h3>City : {city}</h3>
                        <h3>State : {state}</h3>
                </div>
           </div> */}
<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
      >
           <Slider>
          <Slide index={0}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" /></Slide>
          <Slide index={1}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" /></Slide>
          <Slide index={2}><img width="100%" src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" /></Slide>
        </Slider>
      </CarouselProvider>

        </>
    )
}

export default FunctionalForm