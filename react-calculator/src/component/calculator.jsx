import {Component} from 'react';

class Calculator extends Component{
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            operation: ''
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

    calculate = () => {

    }


    render(){
        return(
            <>
                <form>
                    <div>
                        <input type={"number"} placeholder="Enter first number" onChange={this.setFirstNumber}/>
                    </div>
                    <div>
                        <input type={"number"} placeholder="Enter second number" onChange={this.setSecondNumber}/>
                    </div>
                    <select name="operation" onChange={this.setOperation}>
                        <option>Select operation</option>
                        <option value="add">Add</option>
                        <option value="substract">Substract</option>
                        <option value="multiply">Multiply</option>
                        <option value="divide">Divide</option>
                    </select>
                    <div>
                        <button type='submit' onClick={this.calculate}>Calculate</button>
                    </div>
                </form>
            
            </>
        )
    }
}

export default Calculator