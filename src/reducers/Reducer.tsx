import State from "../State";
import {Action, Reducer} from "redux";

const TYPE_INPUT = 'INPUT_TYPE'

interface InputAction extends Action {
    type: typeof TYPE_INPUT,
    name: string
}

const initialState: State = {
    name: "",
}

const reducer: Reducer<any, InputAction> = (state: State = initialState, action: InputAction): State => {
    switch (action.type) {
        case TYPE_INPUT:
            return {...state, name: action.name }
        default:
            return state;
    }
}

export default reducer;