import React, { Component } from 'react'



class EditProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullNameEdited: "",
            descriptionEdited: "",
            imgUrlUpdate: "",

        }
    }
    removeValue = () => {
        this.setState({ fullNameEdited: "", descriptionEdited: "", imgUrlUpdate: "" })
    }

    imgUrlUpdate = (event) => {
        this.setState({ imgUrlUpdate: event.target.value })
    }

    nameUpdate = (event) => {
        this.setState({ fullNameEdited: event.target.value })
    }

    descriptionUpdate = (event) => {
        this.setState({ descriptionEdited: event.target.value })
    }

    sendDataForUpdate = (event) => {
        event.preventDefault();
        const imgUrlUpdate = this.state.imgUrlUpdate
        const description = this.state.descriptionEdited
        const fullName = this.state.fullNameEdited
        this.props.onUpdateProfile(fullName, description, imgUrlUpdate)
        this.setState({ fullNameEdited: "", descriptionEdited: "", imgUrlUpdate: "" })
    }


    render() {
        return (
            <div id="modal1" className="modal editModal">
                
                <div className="row inputName">
                    <div className="input-field col s6">
                        <input placeholder='Url to your profile image?' id="img_url" type="text" className="validate" onChange={this.imgUrlUpdate} value={this.state.imgUrlUpdate} />
                        <label htmlFor="img_url">Image Url</label>
                    </div>
                </div>
                <div className="row inputDesc">
                    <div className="input-field col s6">
                        <input placeholder={this.props.name} id="username" type="text" onChange={this.nameUpdate} value={this.state.fullNameEdited} />
                        <label htmlFor="username">Username</label>
                    </div>
                </div>
                <div className="row inputDesc">
                    <div className="input-field col s6">
                        <input placeholder={this.props.aboutShort} id="about_short" type="text" onChange={this.descriptionUpdate} value={this.state.descriptionEdited} />
                        <label htmlFor="about_short">About you...</label>
                    </div>
                </div>
                <div className='buttonsOfModelUser'>
                    <p className="modal-action modal-close waves-effect btn-flat" onClick={this.removeValue}>CLOSE</p>
                    <p className="modal-action modal-close waves-effect btn-flat" onClick={this.sendDataForUpdate}>UPDATE</p>
                </div>

            </div>
        )
    }
}
export {
    EditProfilePage
}