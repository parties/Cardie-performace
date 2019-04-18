import React from "react";
import {connect} from "react-redux";

function _Profession({description}) {
    return (
        <p>
            {" "}
            <span className="faint">I am</span> a {description}
        </p>
    );
}

export const Profession = connect((state) => ({
    description: state.description
}))(_Profession);
