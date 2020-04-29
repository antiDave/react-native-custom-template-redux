import { INCREMENTNUMBER1, DECREMENTNUMBER1, INCREMENTNUMBER2, DECREMENTNUMBER2 } from "../actions/types";

const obj = {
    data: {
        number1: 0,
        number2: 0,
    }
}
export default (state = obj, action) => {

    if (action.type === INCREMENTNUMBER1) {

        state.data.number1 = state.data.number1 + 1
        return { ...state };
    }
    else if (action.type === DECREMENTNUMBER1) {
        if (state.data.number1 !== 0) {
            state.data.number1 = state.data.number1 - 1
            return { ...state };
        }
        else {
            return { ...state };
        }
    }
    else if (action.type === INCREMENTNUMBER2) {
        state.data.number2 = state.data.number2 + 1
        return { ...state };
    }
    else if (action.type === DECREMENTNUMBER2) {
        if (state.data.number2 !== 0) {
            state.data.number2 = state.data.number2 - 1
            return { ...state };
        }
        else {
            return { ...state };
        }
    }
    else {
        return { ...state };
    }
}