import React, { Component } from "react";
import { connect } from "react-redux";
import {addArticle} from "../js/actions/index"


class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            fdata:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ fdata: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { fdata } = this.state;
        this.props.addArticle({fdata});
        this.setState({ fdata: "" });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="fdata">Name</label>
                    <input type='text' id='fdata' value={this.state.fdata} onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }

}
function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}
const ListForm =connect(
    null,
    mapDispatchToProps
)(Form)
export default ListForm;