import React from 'react';
import { Comment } from "./Comment"
import { InputComment } from './InputComment'
import { VideoSinglePost } from "./VideoSinglePost"
import { TextSinglePost } from "./TextSinglePost"
import { ImageSinglePost } from "./ImageSinglePost"



class ViewPostDetails extends React.Component {
    checkType = () => {
        if (this.props.match.params.type === "video") {
            return < VideoSinglePost data={this.props.match.params.id} />
        } else if (this.props.match.params.type === "text") {
            return < TextSinglePost data={this.props.match.params.id} />
        } else return <ImageSinglePost data={this.props.match.params.id} />
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        {this.checkType()}
                    </div>
                        <ul className="row">
                            <Comment postId={this.props.match.params.id} />
                        </ul>
                </div>
            </main >
        )
    }
}

export {
    ViewPostDetails

}
