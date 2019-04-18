import React, {Component} from "react";
import {connect} from "react-redux";
import store from "./store";
import user from "./images/user.png";
import "./App.css";
import {ChangeProfession} from "./components/change-profession";
import {Profession} from "./components/profession";

class _App extends Component {
    render() {
        const {name, likes, location} = this.props;
        return (
            <div className="App">
                <section className="User__img">
                    <img src={user} alt="user" />
                </section>

                <section className="User__info">
                    <Profession />
                    <p>
                        {" "}
                        <span className="faint">I like</span> {likes}
                    </p>

                    <p className="User__info__details User__info__divider faint">
                        <span>Name: </span>
                        <span>{name}</span>
                    </p>
                    <p className="User__info__details faint">
                        <span>Location: </span>
                        <span>{location}</span>
                    </p>
                </section>

                <div className="App__update">
                    <ChangeProfession />
                </div>
            </div>
        );
    }
}

export const App = connect((state) => ({
    name: state.name,
    likes: state.likes,
    location: state.location
}))(_App);
