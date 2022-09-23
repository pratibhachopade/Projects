import React from "react";
import { connect } from "react-redux";

const ConnectedList = (props) =>(
    <ul>
        {props.lists.map((el, index)=>(
            <li key={index}>{el.fdata}</li>
        ))}
    </ul>
);

const mapStateToProps = state =>{
    return {
        lists : state.formReducer.lists
    }
};

const List = connect(mapStateToProps, null)(ConnectedList);

export default List;