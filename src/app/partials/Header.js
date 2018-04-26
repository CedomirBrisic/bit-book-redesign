import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        localStorage.removeItem("sessionId")

    }


    render() {
        return (
            <header className=" navbar-fixed">
                <nav className="black darken-4 nav-wrapper row">
                <div className="col s4 offset-s1">
                <div className="row">

                <img className="bright-shadow"width="80px"src="https://www.codeninjas.eu/wp-content/uploads/2016/10/cnsmalllogobig.fw_.png" alt="ninja logo"/>
                    <h3 className="padding10 bright-shadow">BIT Book</h3>
                </div>
                </div>
                    <ul id="nav-mobile" className="right col s4">
                        <li><Link to='/FeedPage'>Feed</Link></li>
                        <li><Link to='/People' className="selectedPage">People</Link></li>
                        <li><Link to='/MyProfile'>Profile</Link></li>
                        <li onClick={this.logout}><Link to='/'>Welcome Page</Link></li>
                    </ul>
                </nav>
            </header>

        )
    }
}
export { Header };