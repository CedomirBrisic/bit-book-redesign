import React, { Component } from 'react';
import M from "materialize-css";
import "../../App.css"
import { Register } from "./RegisterComponent";
import { LogIn } from "./LogInComponent";
import { RegisterForm } from "../services/register";
import { fetchLogIn } from "../services/fetchLogIn";
class LoginRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRegistered: false
        }
    }

    registerUser = (username, password, name, email) => {

        RegisterForm(username, password, name, email).then(response => response).then(response => console.log(response))


    }
    logInUser = (username, password) => {
        fetchLogIn(username, password).then(response => response.json())
            .then(user => localStorage.setItem("sessionId", user.sessionId))
            .then(function () { window.location.replace(`http://localhost:3000/#/FeedPage`) }, 2000)
    }

    registerDisplay = () => {
        this.setState({
            isRegistered: true
        })
    }

    logInDisplay = () => {
        this.setState({
            isRegistered: false
        })
    }

    checkRegistration = () => {
        if (this.state.isRegistered) {
            return (
                <Register registerUser={this.registerUser} />
            )
        } else {
            return (<LogIn logInUser={this.logInUser} />)
        }

    }



    render() {
        return (


            <main>
                <div className="margin-top20 paddingt5p container row">
                    <div className="col s5 welcome-page">
                        <div className="row">
                            <a className="waves-effect btn-flat col s5 offset-s1 ellipse" onClick={this.logInDisplay}><h6>Log In</h6></a>
                            <a className="waves-effect btn-flat col s5 offset-1" onClick={this.registerDisplay}><h6>Become a Ninja</h6></a>
                            <div className="row">
                                {this.checkRegistration()}
                            </div>
                        </div>
                    </div>
                    <div className="col s6 offset-s1">
                    <div className="row">

                        <img className="col s3" src="https://vignette.wikia.nocookie.net/puffleville/images/b/be/Ninja_crouch.png/revision/latest?cb=20121009024206" alt="ninja"/>
                        <p className="handwriting black-text col s8 offset-s1">Ninja never wear headbands with the word "ninja" printed on them. </p>
                          <p className="handwriting black-text col s8 offset-s1">Ninja always move to America when making a new start as a non-assassin. </p>
                        <p className="handwriting black-text col s12">Ninjas may seem mysterious, but the origin of their name is not. 
                        The word ninja derives from the Japanese characters "nin" and "ja."
                        "Nin" initially meant "persevere," but over time it developed the extended meanings "conceal"
                         and "move stealthily." In Japanese, "ja" is the combining form of sha, meaning "person." 
                         Ninjas originated in the mountains of Japan over 800 years ago as practitioners of ninjutsu, 
                         a martial art sometimes called "the art of stealth" or "the art of invisibility." 
                         They often served as military spies and were trained in disguise, concealment, geography, 
                         meteorology, medicine, and also other martial arts. Popular legends still associate them with
                          espionage and assassinations, but modern ninjas are most likely to study ninjutsu to 
                          improve their physical fitness and self-defense skills.</p>
                    </div>
                    </div>
                </div>
            </main>

        )
    }
}
export { LoginRegister }