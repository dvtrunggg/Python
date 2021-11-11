import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../App.css'
import './SignIn.css'
//import axios from 'axios'
import PropTypes from 'prop-types'


class SignIn extends Component{
    state = {
        username:'',
        password: ''
    };
    componentDidMount(){
        if(this.props.logged_in){
            return <Redirect to= '/' />;
        }
    }
    
    handle_change = e =>{
        const name = e.target.name
        const value = e.target.value
        this.setState(prevstate => {
            const newState = { ...prevstate }
            newState[name] = value;
            return newState
        });
    }
    handle_check_username = () => {
        if(this.state.username === '')
        {
          document.getElementById('error_username').innerHTML = "User name not empty"
          document.getElementById('error_username').style.color = 'red'
          document.getElementById('error_username').style.marginLeft = '5%'
        }
        else{
          document.getElementById('error_username').innerHTML = ""
        }
        
      }
    handle_check_pw = () => {
        if(this.state.password === '')
        {
          document.getElementById('error_password').innerHTML = "Password not empty"
          document.getElementById('error_password').style.color = 'red'
          document.getElementById('error_password').style.marginLeft = '5%'
        }
        else{
          document.getElementById('error_password').innerHTML = ""
        }
      }
    render(){
        if(!this.props.logged_in){
        if(!this.props.search){
        return (  
                        <div className="login-container">
                              <form className="login-form" onSubmit={e => this.props.handle_login(e, this.state)}>
                                  <h1>Login</h1>
                                  <h6>Fill your account into this form to login</h6>
                                  <hr/>
                                  <div className="form-group">
                                      <input type="text" className="form-control" name="username" value={this.state.username} 
                                      onChange={this.handle_change} onBlur={this.handle_check_username} placeholder="Username" />
                                      <p id='error_username'></p>

                                  </div>
                                  <br/>
                                  <div class="form-group">
                                      <input type="password" className="form-control" name="password" value={this.state.password}
                                      onChange={this.handle_change} onBlur={this.handle_check_pw} placeholder="Password" />
                                      <p id = 'error_password'></p>
                                      {/* <p id="text_box" style="color: red;">{{default}}</p> */}
                                  </div>
                                  <br/>
                                  <div className="forgot-link">
                                      <div className="form">
                                          <input type="checkbox" name="remember" value=""/>
                                          <label for="remember">Remember your account</label>
                                      </div>
                                      <p>
                                          <Link to="#">Forgot Password?</Link>
                                      </p>
                                  </div>
                                  <button type="submit" className="btn mt-5 btn-custom btn-primary btn-block rounded-pill btn-lg login-button">Login</button>
                                  <p className="mt-3 font-weight-normal">Don't have an account <Link to="/sign-up"><strong className="text-primary" data-toggle="modal" data-target="#sign-up">Register now</strong></Link></p>
                              </form>
                          </div>
                    
                )}
                else{
                    return <Redirect to={'/search?key=' + this.props.search}/>
                }
        }
        else{
            return <Redirect to='/' />;
        }
    }

}
SignIn.propTypes = {
    handle_login: PropTypes.func.isRequired,
    logged_in: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
};

export default SignIn;


// class SignIn extends Component {

//     state = {
//         account: {
//             username: '',
//             password: ''
//         }
//     }
//     inputChanged = e => {
//         const cred = this.state.account;
//         cred[e.target.name] = e.target.value;
//         this.setState({account: cred})
//     }
    
//     passwordHash = require('password-hash')
//     login = e => {
//         // var account_temp = this.state.account;
//         // account_temp.password = this.passwordHash.generate(this.state.account.password)
//         // this.setState({account: account_temp})
//         //  console.log(this.state.account)
//         //this.state.account.password = this.passwordHash.generate(this.state.account.password)
        
//         axios({
//             method:'POST',
//             url: "http://localhost:8000/get_user/",
//             data: this.state.account
//             })
//             .then(reponse => {
//                 console.log(reponse)
//                 if(reponse['data'])
//                 {
//                     if(this.passwordHash.verify(this.state.account.password,reponse['data']))
//                     {
//                         window.location = 'http://localhost:3000/'
//                     }
//                     else{
//                         alert("Password does not correct")
//                     }
//                 }
//                 else{
//                     alert("Username does not exits")
//                 }
                
//             })
//             .catch(error => {
//                 console.log(error)
//             })   
//     }
//     render(){
//         return (  
//             <div className="login-container">
//                   <div className="login-form" >
//                       <h1>Login</h1>
//                       <h6>Fill your account into this form to login</h6>
//                       <hr/>
//                       <div className="form-group">
//                           <input type="text" className="form-control" name="username" value={this.state.account.username} 
//                           onChange={this.inputChanged} placeholder="Username" />
//                       </div>
//                       <br/>
//                       <div class="form-group">
//                           <input type="password" className="form-control" name="password" value={this.state.account.password}
//                           onChange={this.inputChanged} placeholder="Password" />
//                           {/* <p id="text_box" style="color: red;">{{default}}</p> */}
//                       </div>
//                       <br/>
//                       <div className="forgot-link">
//                           <div className="form">
//                               <input type="checkbox" name="remember" value=""/>
//                               <label for="remember">Remember your account</label>
//                           </div>
//                           <p>
//                               <Link to="#">Forgot Password?</Link>
//                           </p>
//                       </div>
//                       <button type="submit" onClick={this.login} className="btn mt-5 btn-custom btn-primary btn-block rounded-pill btn-lg login-button">Login</button>
//                       <p className="mt-3 font-weight-normal">Don't have an account <Link to="/sign-up"><strong className="text-primary" data-toggle="modal" data-target="#sign-up">Register now</strong></Link></p>
//                   </div>
//               </div>

        
//     )

//     }
    
// }

// export default SignIn

