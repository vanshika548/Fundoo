import React, { Component } from 'react';
import "../Icon/Icon.css";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import UserService from '../../service/UserService';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import SimplePopper from "../ColorPopper/ColorPopper"
import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Collaborators from '../Collaborators/Collaborators'
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@mui/material/Avatar';
import { MenuList } from "@material-ui/core";
import pic from "../../Assets/pic.jpg"

const obj = new UserService();
const styles = {
    underline: {
        marginLeft:'20px',
        marginTop:'10px',
        width:'300px',
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            openStatus: false,
            collaborators:'',
            collabData:[]

        }

    }

    SetColor =(color) => {
        if (this.props.colorval == "update") {
            let Data = {
                color: color.code,
                noteIdList: [this.props.val.id]
            };
            obj.changeColor(Data).then((response) => {
                console.log(response);
                this.props.displayNote();
            }).catch(error => {
                console.log(error);
            });
        } else {
          
            this.props.recieveColor(color.code);
        }
    }

    
    onArchive = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isArchived: true,
        };
        
        obj.archiveNote(Data).then((response) => {
            console.log(response);
            this.props.displayNote();
        }).catch(error => {
            console.log(error);
        })
        console.log(Data);
    }


    onDelete = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isDeleted: true,
        };
        
        obj.deleteNote(Data).then((response) => {
            console.log(response);
            this.props.displayNote();
        }).catch(error => {
            console.log(error);
        })
        console.log(Data);
    }


    menuClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };



    dialogopen = ()=>{
        console.log("hiiiiiiiiiiii")
        this.setState({
            openStatus:true
        });
    }
   
    
   
    handleClose = () => {
        this.setState({
            openStatus:false
        })
    }

    handleInput = (e) =>{
        console.log('search value', e.target.value);
        this.setState({
            collaborators:e.target.value
        });
        let Data = {
            searchWord: e.target.value
        }
        obj.searchCollab(Data).then((data)=> {
            this.setState({
                collabData:data.data.data.details
            });
            console.log('searchCollab', data);
        }).catch(error => {
            console.log('searchCollab', error);
        });
    }
    dialogopen = () => {
        this.setState({
            openStatus: true
        });
    }

    onSetStatus = (val) => {
        this.setState({
            openStatus: val
        });
    }
    // addColaborator(val){
    //     let collaborators = val;
    //     console.log("----------------------->",collaborators);
    //     console.log("----------------------->",this.props.note.id);
    //     obj.addCollab(collaborators,this.props.note.id).then((data) => {
    //         console.log('data', data);
    //     }).catch(error => {
    //         console.log('searchCollab', error);
    //     });
    // }
//onClick={() => this.addColaborator(values)
    render() {
        const { classes } = this.props;
        const userList = this.state.collabData.map((values, index) => {
            return (
                <MenuItem key={index} >   
                  {values.email}
                </MenuItem>
              );
        });
        return (
    
                <div className="icon-open-content">
                    <div className="note-icons-hover">
                        <Tooltip title="Reminder">
                            <AddAlertOutlinedIcon className="i-disp" />
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Collaborator">
                            <PersonAddOutlinedIcon  onClick={this.dialogopen} className="i-disp" />
                        </Tooltip>
                        {/* <Dialog open={this.state.openStatus} onClose={this.handleClose}  > 
                        <div
                            className="dialog-body" 
                            style={{
                            width:"570px",
                            minHeight:"80px",
                            padding:"15px",
                           
                           
                            justifyContent:"space-between"
                        }}>
                             <div style={{borderBottom: "1px solid rgba(0,0,0,0.15)",fontSize:"18px",fontWeight:"500",height:"25px"}}>
                               Collaborators
                            </div>

                            <div className="user-info" >
                                <div className="user-logo" > 
                                    <Avatar src={pic} />
                                </div>
                                <div>
                                    <div className="name-txt">{localStorage.getItem('first')}{localStorage.getItem('last')}(Owner)</div>
                                    <div className="email-txt">{localStorage.getItem('email')}</div>
                                </div>  
                            </div>

                            <div className="second-user-info">
                                <Avatar src="/broken-image.jpg" />
                                <div>
                                    <input className="search" placeholder="Person or email to share with" onChange={this.handleInput}>
                                    </input>
                                </div>
                            </div>

                                <div className='collab-btn'>
                                <span onClick={this.closeDialog}>Cancel</span>
                                <span onClick={this.saveCollab}>Save</span>
                                </div>
                            
                            </div>
                            <div style={{
                                maxHeight:"300px",
                                overflow:"scroll",
                                marginLeft:"50px",
                                width : "500px",
                                border : "gray solid 2px",
                                background : "white"
                             }}>
                            <MenuList>{userList}</MenuList>
                            </div>
                        </Dialog> */}
                    </div>
                    <div className="note-icons-hover">
                    <Tooltip title="ChangeColor">
                        <SimplePopper selectColor={(Data) => {
                            this.SetColor(Data);
                        }} />
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Image">
                             <ImageOutlinedIcon className="i-disp" /> 
                        </Tooltip>
                    </div>
                    <div className="note-icons-hover">
                        <Tooltip title="Archive">
                            <ArchiveOutlinedIcon className="i-disp" 
                            onClick={() => {
                                if (this.props.colorval === "update") {
                                    this.onArchive()
                                }
                                else {
                                    this.props.archiveCreate()
                                }
                            }}/>
            
                              
                        </Tooltip>
                    </div>
               
                <div className="note-icons-hover">
                <Tooltip title="Menu">
                        <MoreVertOutlinedIcon className="i-disp" onClick={this.menuClick}/> 
                        </Tooltip>
                        <Menu
                    id="simple-menu"
                    keepMounted
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    open={Boolean(this.state.anchorEl)}
                >
                    <MenuItem className="popover" onClick={() => {
                        if (this.props.colorval === "update") {
                            this.onDelete()
                            this.handleClose()
                        }
                        else{
                            this.props.deleteCreate()
                        }
                    }
                    }>Delete Note</MenuItem>
                    <MenuItem >Add Label</MenuItem>
                    <MenuItem >Add Drawing</MenuItem>
                    <MenuItem >Make a Copy</MenuItem>
                    <MenuItem >Show Checkboxes</MenuItem>
                    <MenuItem >Copy to Google Docs</MenuItem>
                </Menu>
                <Collaborators
                    open={this.state.openStatus}
                    getCloseStatus={(Data) => {
                        this.onSetStatus(Data);
                    }}
                    getNote = {this.props.getNote}
                />
                   
                </div>
               

            </div>

            
     
        );
    }
}

export default Icon;