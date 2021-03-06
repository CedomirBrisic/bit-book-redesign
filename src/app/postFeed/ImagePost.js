import React from 'react'
import { Link } from 'react-router-dom'

class ImagePost extends React.Component {


    render() {

        return (
            <Link to={`PostDetails/${this.props.data.id}/image`}>

                    <div className="col s8 offset-s2">
                        <div className="card grey darken-1 row">
                            <div className="card-content">
                                <img className="" width="100%" src={this.props.data.imageUrl} alt="" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></img>
                            <h5 className="post-alias grey-text text-darken-4 left col s4">Alias:  {this.props.data.userDisplayName}</h5>
                            <h6 className="post-comments-num grey-text text-darken-4 right col s2"><span>{this.props.data.commentsNum}</span> comments</h6>
                            </div>
                        </div>
                    </div>
            </Link>



        )
    }


}

export {
    ImagePost
}