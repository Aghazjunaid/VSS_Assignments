import {Component} from 'react';

class Calculator extends Component{
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            operation: '',
            total: ''
        }
    }

    setFirstNumber = (e) => {
        this.setState({
            ...this.state,
            num1: e.target.value
        })
    }

    setSecondNumber = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            num2: e.target.value
        })
    }

    setOperation = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            operation: e.target.value
        })
    }

    calculate = (e) => {
        e.preventDefault();
        if(this.state.operation === "add"){
            let total = Number(this.state.num1) +  Number(this.state.num2)
            this.setState({
                ...this.state,
                total : total
            })
        }else if(this.state.operation === "substract"){
            let total = Number(this.state.num1) -  Number(this.state.num2)
            this.setState({
                ...this.state,
                total : total
            })
        }else if(this.state.operation === "multiply"){
            let total = Number(this.state.num1) *  Number(this.state.num2)
            this.setState({
                ...this.state,
                total : total
            })
        }else if(this.state.operation === "divide"){
            let total = Number(this.state.num1) /  Number(this.state.num2)
            this.setState({
                ...this.state,
                total : total
            })
        }else if(this.state.operation === "remainder"){
            let total = Number(this.state.num1) %  Number(this.state.num2)
            this.setState({
                ...this.state,
                total : total
            })
        }else{
            alert("Invalid Operation")
        }
    }


    render(){
        return(
            <>
                <form>
                    <div>
                        <input type={"number"} placeholder="Enter first number" onChange={this.setFirstNumber} required/>
                    </div>
                    <div>
                        <input type={"number"} placeholder="Enter second number" onChange={this.setSecondNumber} required/>
                    </div>
                    <select name="operation" onChange={this.setOperation} required>
                        <option>Select operation</option>
                        <option value="add">Add</option>
                        <option value="substract">Substract</option>
                        <option value="multiply">Multiply</option>
                        <option value="divide">Divide</option>
                        <option value="remainder">Find Remainder</option>
                    </select>
                    <div>
                        <button type='submit' onClick={this.calculate}>Calculate</button>
                    </div>
                </form>
                <br/>
                <br/>
                <br/>
                <h3>Your Output is : {this.state.total}</h3>
            </>
        )
    }
}

export default Calculator