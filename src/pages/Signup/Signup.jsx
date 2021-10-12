import React, { Component }  from "react"
import TextField from '@mui/material/TextField';
import '../Signup/Signup.css'
import { Link } from 'react-router-dom';

export class signupValidation extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : "",
      pass : "",
      emailError : false,
      passError : false
    };
  }

  isValidated = () => {
    let isError =false;
    const errors = this.state;

    errors.emailError = this.state.email !== ''? false : true;
    errors.passError = this.state.pass !== '' ? false : true;

    this.setState({
      ...errors
    })
    return isError = errors.emailError || errors.passError
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
    return (
      <div className="App">
     <div class="container">
       <div className = "fundooapplogo">
         <p className = "first">F</p>
         <p className = "second">u</p>
         <p className = "third">n</p>
         <p className = "fourth">d</p>
         <p className = "fifth">o</p>
         <p className = "sixth">o</p>
       </div>
       <div class="top-sec">
         <label class="bold-label">Sign in</label>
         <label class="inner-label">Use your Google account</label>
       </div>
       <div class="textfields">
         <TextField id="textfield1" 
         label="Email or phone" 
         variant="outlined" 
         name = "email"  
         size='large' 
         fullWidth sx={{mb:1 ,mt:5}} 
         error = {this.state.emailError} 
         onChange={e => this.change(e)} 
         helperText = {this.state.emailError ? "Enter email " : ''}/>


         <Link underline="none" to="/ForgotEmail" class="link" >Forgot email?</Link> 
         <TextField id="textfield1" 
            label="Password" 
            variant="outlined" 
            name ="pass" 
            onChange={e => this.change(e)} 
            size='large' fullWidth sx={{mb:1,mt:3}} 
            error = {this.state.passError} 
            helperText = {this.state.passError ? "Enter password " : ''}/>

         <Link underline="none" to="/ForgotPassword" class="link" >Forgot password?</Link> 
       </div>
       <div class="middle">
         <label>Not your computer?Use guest mode to sign in privately.</label>
         <a>Learn more</a>
       </div>
       <div class="bottom">
         <a>Create account</a>
         <button onClick={this.validateBtn}>Next</button>
       </div>
     </div>
   </div>
    );
  }
}
export default signupValidation;
