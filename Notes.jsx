import React, { Component } from 'react'
import "./Notes.css"
import UserService from '../../service/UserService';

import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Snackbar } from '@mui/material';
import Icons from '../Icon/Icon';
import Avatar from '@material-ui/core/Avatar';
import { TextareaAutosize } from '@material-ui/core';

const obj = new UserService();

export class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            hide: true,
            title: "",
            description: "",
            isArchived: false,
            isDeleted: false,
            color: "#ffffff",
            snackbaropen: false,
            snackbarmsg: "",
            notes: [],
            collabDetails: [],

        }
    }


    snackbarClose = () => {
        this.setState({ snackbaropen: false });
    };


    expandIt = () => {
        this.setState({
            show: true,
            hide: false,


        })
    }

    change = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }



    handleColor = (data) => {
        this.setState({
            color: data
        });
    }


    handleClickClose = () => {
        this.setState({
            isArchived: true,
        });

    }

    normal = () => {
        if (this.state.description != "" && this.state.title != "") {



            let addnotesObj = {
                "title": this.state.title,
                "description": this.state.description,
                "color": this.state.color,
                "isArchived": this.state.isArchived,
                "isDeleted": this.state.isDeleted,

            }
            console.log(addnotesObj);
            obj.addNotes(addnotesObj).then((response) => {
                console.log(response);
                this.props.displayNote();
                this.setState({ snackbaropen: true, color: "#ffffff", show: false, hide: true, title: "", description: "", snackbarmsg: "Added Notes Sucessfully" });

            })
                .catch((error) => {
                    console.log(error);
                    this.setState({ snackbaropen: true, snackbarmsg: "Adding Notes Failed!" });
                })
        }


    };

    getNote =(values) => {
        this.setState({
            collabDetails: values
        })

    }

    render() {
        const userDetails = this.state.collabDetails.map((values, index) => {
            return (
                <div className="takenote-avatar">
                    <Avatar
                        type="button" >{values.firstName.charAt(0)}</Avatar>
                </div>


            );
        });

        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />
                <div className="header2">


                    {this.state.hide && (

                        <form id="form1">

                            <p>
                                <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..." onClick={this.expandIt} />
                                <div className="Notesicon">
                                    <IconButton size="large" >
                                        <CheckBoxOutlinedIcon />
                                    </IconButton>
                                    <IconButton size="large" >
                                        <BrushOutlinedIcon className="paint" />
                                    </IconButton>
                                    <IconButton size="large" >
                                        <InsertPhotoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </p>
                        </form>
                    )}

                    {this.state.show && (
                        <form id="form2" style={{
                            backgroundColor: this.state.color
                        }}>
                            <p>
                                <input
                                    className="forminput1"
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    onChange={e => this.change(e)}
                                    style={{
                                        backgroundColor: this.state.color
                                    }}
                                />
                                <TextareaAutosize  name="description" className="forminput-2" aria-label="empty textarea"  multiline={true}
                            numberOfLines={5} placeholder="Take a Note..." onChange={e => this.change(e)}
                                    style={{
                                        backgroundColor: this.state.color
                                    }}
                                />
                                
                            </p>
                            <div className="user-display">
                                {userDetails}
                            </div>
                            <Icons colorval="create"
                                val={this.state}
                                displayNote={this.props.displayNote}
                                recieveColor={this.handleColor}
                                archiveCreate={this.handleClickClose}
                                getNote={this.getNote}  
                            />
                            <div className="notes-icons">
                                <Button className="button" style={{ fontSize: "small" }} onClick={this.normal}>Close</Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        )
    }
}

export default Notes