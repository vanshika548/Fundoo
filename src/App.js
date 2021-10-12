
import Registration from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import signupValidation from './pages/Signup/Signup'
import ForgotEmail from './pages/ForgotEmail/ForgotEmail'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/Registration" component ={Registration}></Route>
          <Route exact path="/" component ={signupValidation}></Route>
          <Route path="/ForgotPassword" component={ForgotPassword}></Route>
          <Route path="/ForgotEmail" component={ForgotEmail}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
