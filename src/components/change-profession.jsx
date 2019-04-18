import React from "react";
import {connect} from "react-redux";
import {setProfession} from "../actions";

function getRandomProfession() {
    // a list of professions
    const professions = [
        "Dancer",
        "Fashion Designer",
        "Bartender",
        "Wrestler",
        "Librarian",
        "Singer",
        "Coder",
        "Teacher"
    ];

    // pick a random profession from the list above
    const randomProfession = professions[Math.floor(Math.random() * professions.length)];

    return randomProfession;
}

function _ChangeProfession(props) {
    return (
        <button onClick={props.onClick}>
            Change user's profession
        </button>
    );
}

function mapStateToProps(state) {
    return {
        description: state.description
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => {
            dispatch(setProfession(getRandomProfession()));
        }
    };
}

export const ChangeProfession = connect(mapStateToProps, mapDispatchToProps)(_ChangeProfession); // eslint-disable-line
