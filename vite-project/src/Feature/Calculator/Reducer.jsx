const initialState = {
    result : 0
}

const calculatorReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NUMBER': 
            let a = parseInt(action.payload.num1)
            let b = parseInt(action.payload.num2)
            return {
                ...state, result : (a+b)
            }
        default :
            return state
    }
}

export default calculatorReducer