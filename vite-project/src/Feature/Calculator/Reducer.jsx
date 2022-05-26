const initialState = {
    result : 0
}

const calculatorReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NUMBER': 
            return {
                ...state, result : (action.payload.num1+action.payload.num2)
            }
        case 'SUBSTRACT_NUMBER':
            return {
                ...state, result : (action.payload.num1-action.payload.num2)
            }
        case 'MULTIPLY_NUMBER':
            return {
                ...state, result : (action.payload.num1*action.payload.num2)
            }
        case 'DIVIDE_NUMBER':
            return {
                ...state, result : (action.payload.num1/action.payload.num2)
            }          
        default :
            return state
    }
}

export default calculatorReducer