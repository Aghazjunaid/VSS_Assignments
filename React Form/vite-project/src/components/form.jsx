import {Component} from "react";

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    nameChange = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            name : e.target.value,
        })
    }

    ageChange = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            age: e.target.value
        })
    }

    render(){
        return (
            <>
                <div>
                    <input type={"text"} onChange={this.nameChange}/>
                </div>
                <div>
                    <input type={"number"} onChange={this.ageChange}/>
                </div>
                <div>
                    <h3>Name : {this.state.name}</h3>
                    <h3>Age : {this.state.age}</h3>
                </div>
            </>
        )
    }
}

export default Form