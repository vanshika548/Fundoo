import React, { Component }  from "react"
import TextField from '@mui/material/TextField';
import '../ForgotPassword/ForgotPassword.css'

export class ForgotPassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      pass : "",
      confirmPasswor :"",
      confirmPassworError :false,
      passError : false
    };
  }

  isValidated = () => {
    let isError =false;
    const errors = this.state;

    errors.confirmPassworError = this.state.pass !== ''? false : true;
    errors.passError = this.state.confirmPasswor !== '' ? false : true;

    this.setState({
      ...errors
    })
    return isError = errors.confirmPassworError || errors.passError 
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
      <div className="App">
   <div class="container">
     <div className = "top-logo">
       <p className = "first">F</p>
       <p className = "second">u</p>
       <p className = "third">n</p>
       <p className = "fourth">d</p>
       <p className = "fifth">o</p>
       <p className = "sixth">o</p>
     </div>
     <div class="heading">
       <label class="outer-label1">Find your email</label>
       <label class="outer-label2">Enter your password</label>
     </div>
     <div class="bottom-sec">
       <TextField id="email" 
       label="Password" 
       variant="outlined" 
       size='large' sx={{mb:2}}  
       name = "pass" 
       error = {this.state.passError} 
       onChange={e => this.change(e)}
       helperText = {this.state.passError ? "Enter password " : ''}/>

       <TextField id="email" 
       label="Confirm Password" 
       variant="outlined" 
       size='large' sx={{mb:4}} 
       name = "confirmPasswor" 
       onChange={e => this.change(e)}
       error = {this.state.passError} helperText = {this.state.passError ? "Enter confirm password " : ''}/>
       <button onClick={this.validateBtn}>Next</button>
     </div>
           
    </div>
    </div>
    )
  }
}

export default ForgotPassword;