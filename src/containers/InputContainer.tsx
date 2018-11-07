import { InputComponent } from "../component/InputComponent"
import State from "../State";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import Props from "../Props";

const mapStateToProps = (state: State): State => {
    return {
        name: toUpperCase(state.name),
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (name: string) => dispatch( { type: "INPUT_TYPE", name: name } )
    }
}
export const toUpperCase = (value: string): string => value.toUpperCase()
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)