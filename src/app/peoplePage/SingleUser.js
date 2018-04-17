import React from 'react';
import { fetchUsers } from "../services/fetchUsers";
import { checkPostDate } from "../../shared/checkPostDate";
import { Link } from "react-router-dom"

class SingleUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (




            <div className=" card avatar col s6 offset-s3   black profilesCard" >
                <Link to={`Profile/${this.props.user.id}`}>
                    <div className="row rowCard" >
                            <img src={this.props.user.avatarUrl} className="circle col s2" />
                        <h6 className="title titleName profilesName  white-text " > {this.props.user.name} </h6>
                        <p className="col s8 profilesAbout  white-text" > {this.props.user.aboutShort} </p>
                        <div className="right col s3">
                            <p className="profilesLastPost  white-text" > Last Post: < br />
                                {checkPostDate(this.props.user.lastPostDate)}
                            </p>

                        </div>
                    </div>
                </Link>
            </div>




        )

    }
}



export {
    SingleUser
}