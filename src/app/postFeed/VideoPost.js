import React from 'react';
import { Link } from "react-router-dom";


class VideoPost extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    changeVideoUrl = (inputUrl) => {
        let embededUrl = inputUrl.replace("watch?v=", "embed/")
        return embededUrl
    }

    render() {

        return (


            <Link to={`PostDetails/${this.props.data.id}/video`}>

                <div className="col s8 offset-s2">
                    <div className="card grey darken-1 row">
                        <div className="card-conten">
                            <iframe width="100%" height="315" src={this.changeVideoUrl(this.props.data.videoUrl)} title="youtube video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <h5 className="post-alias grey-text text-darken-4 left col s4">Alias:  {this.props.data.userDisplayName}</h5>
                        <h6 className="post-comments-num grey-text text-darken-4 right col s2">{this.props.data.commentsNum} comments</h6>
                    </div>
                </div>
            </Link>



        )

    }
}



export {
    VideoPost
}

// https:www.youtube.com/watch?v=CwjhxtBmQys 
// https://www.youtube.com/embed/ACmydtFDTGs