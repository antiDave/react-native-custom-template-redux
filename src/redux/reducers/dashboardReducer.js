import { KEY } from "../actions/types";

export default (state = 0, action) => {

    if (action.type === KEY) {
        return state + 1;
    }
    else {
        return state;
    }
}