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

                </form>
            
            </>
        )
    }
}

export default Calculator