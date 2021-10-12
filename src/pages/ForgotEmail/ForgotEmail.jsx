import React, { Component }  from "react"
import TextField from '@mui/material/TextField';
import '../ForgotEmail/ForgotEmail.css'

export class ForgotEmail extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : "",
      emailError : false
    };
  }
  isValidated = () => {
    let isError =false;
    const errors = this.state;

    errors.emailError = this.state.email !== ''? false : true;
    

    this.setState({
      ...errors
    })
    return isError = errors.emailError 
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
     <div className = "container-logo">
       <p className = "first">F</p>
       <p className = "second">u</p>
       <p className = "third">n</p>
       <p className = "fourth">d</p>
       <p className = "fifth">o</p>
       <p className = "sixth">o</p>
     </div>
     <div class="heading">
       <label class="heading-label1">Find your email</label>
       <label class="heading-label2">Enter your email</label>
     </div>
     <div class="bottom-sec">
       <TextField id="email" 
       label="Email" 
       variant="outlined" 
       size='large' sx={{mb:2}} 
       onChange={e => this.change(e)}
       name = "email"
       error = {this.state.emailError} 
       helperText = {this.state.emailError ? "Enter email " : ''}/>
       
       <button onClick={this.validateBtn}>Next</button>
     </div>
           
    </div>
    </div>
    )
  }
}

export default ForgotEmail;