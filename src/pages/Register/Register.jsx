import React, { Component }  from "react"
import TextField from '@mui/material/TextField';
 import rightimage from '/Users/Vanshika/fundoo/src/images/account-logo.svg'
 import { Checkbox } from "@mui/material";
 import InputAdornment from '@mui/material/InputAdornment';
 import OutlinedInput from '@mui/material/OutlinedInput';
 import FormControlLabel from '@mui/material/FormControlLabel';
 import Button from '@mui/material/Button';
 import Link from '@mui/material/Link';
 import '../Register/Register.css'

export class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            fName : "",
            lName : "",
            uName : "",
            password : "",
            confirmPass : "",
            fNameError : false,
            lNameError : false,
            uNameError : false,
            passwordError : false,
            confirmPassError : false
        };
    }

    isValidated = () => {
        let isError =false;
        const errors = this.state;
    
        errors.fNameError = this.state.fName !== ''? false : true;
        errors.lNameError = this.state.lName !== '' ? false : true;
        errors.uNameError = this.state.uName !== ''? false : true;
        errors.passwordError = this.state.password !== '' ? false : true;
        errors.confirmPassError = this.state.confirmPass !== ''? false : true;
    
        this.setState({
          ...errors
        })
        return isError = errors.fNameError || errors.lNameError || errors.uNameError || errors.passwordError || errors.confirmPassError;
      }

    validateBtn = () => {
        console.log("validation clck")
        var isValid = this.isValidated();
        if(!isValid ){
          console.log("validation successful")
        
        }
      }
      change = (e) => {
        console.log("change")
        this.setState({
          [e.target.name] : e.target.value
        });
      }
    

    render(){
        return(
            <div className = "Main">
        <div className = "left-sec">
        <div className = "applogo">
            <p className = "first">F</p>
            <p className = "second">u</p>
            <p className = "third">n</p>
            <p className = "fourth">d</p>
            <p className = "fifth">o</p>
            <p className = "sixth">o</p>
       </div>
        <div className="heading">Create Your Fundoo Account</div>
        <div className="subhead">Continue to fundoo</div>

        <div className='name'>
            <TextField id="firstname" 
            label="First name" 
            variant="outlined" 
            size='small' 
            name = "fName"
            error={this.state.fNameError}
            onChange={e => this.change(e)}
            helperText = {this.state.fNameError ? "Enter first name " : ''}/>

            <TextField id="lastname" 
            label="Last name" 
            variant="outlined" 
            size='small' 
            name = "lName"
            error = {this.state.lNameError}
            onChange={e => this.change(e)}
            helperText = {this.state.lNameError ? "Enter last name " : ''}/>
        </div>

        <div className = "User-Name">
        <OutlinedInput 
         className = "user"
        id="user" label = "UserName" 
        endAdornment={<InputAdornment label = "UserName"  
     position="end">@gmail.com</InputAdornment> } 
        size='small' 
        name = "uName"
        error={this.state.uNameError}
        onChange={e => this.change(e)}
        helperText = {this.state.uNameError ? "Enter email " : ''}
       />
        <div className='user-text'>You can use letters, numbers & periods</div>

        </div>

       <div className='user-text1'>Use my current email address instead</div>

        <div className='credentials'>
            <TextField id="password" 
            label="Password" 
            variant="outlined" 
            size='small' 
            name ="password"
            error={this.state.passwordError}
            onChange={e => this.change(e)}
            helperText = {this.state.passwordError ? "Enter password " : ''}/>


            <TextField id="confirm" 
            label="Confirm" 
            variant="outlined" 
            size='small' 
            name = "confirmPass"
            error = {this.state.confirmPassError}
            onChange={e => this.change(e)}
            helperText = {this.state.confirmPassError ? "Enter confirm password " : ''}/>
        </div>

        <div className='bottom-text'>
            Use 8 or more characters with a mix of letters, numbers & symbols
        </div>

       <div className = 'checkbox'>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
    
        </div>

        <div className="last-sec">
        <Link  underline="none" to="/Signup" >Sign in instead </Link>
            <Button className="Next-button" variant = "contained" onClick={this.validateBtn}>Next</Button>
        </div>
        </div>
      
        <div className="right-sec"> 
        <img src = {rightimage} className ="account-logo"></img>
        <div className = "acclogo-text">  One account. All of Fundoo working for you.</div> 
        </div>
      
    </div>
        )
        
    }
}
 export default Registration;