import React, { Component} from "react";
import { connect } from "react-redux";
import {increament, decreament, reset } from "../js/actions/index"

export class Counter extends Component{
    render(){
        const { counter, increament , decreament, reset } = this.props;
        
        return (
            <div >
                <div >
                    <div>{counter}</div>
                    <div>
                        <button onClick={increament}>Increament by 1</button>
                    </div>
                    <div>
                        <button onClick={decreament}>Decreament by 1</button>
                    </div>
                    <div>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        counter : state.counterReducer.counter
    };
}
 function mapDispatchToProps(dispatch){
     return{
         increament: ()=> dispatch(increament()),
         decreament: ()=> dispatch(decreament()),
         reset: ()=> dispatch(reset()),
     }
 }

 export default connect (mapStateToProps, mapDispatchToProps )(Counter);