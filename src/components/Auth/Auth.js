import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Auth extends Component {
    constructor(){
        super()
            this.state = {  
            username: '',
            password: ''
            }
        this.handleInput = this.handleInput.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
         })
     }

     registerUser(){
         axios.post(`/api/users`, {username: this.state.username, password: this.state.password})
     }

     loginUser(){

     }

    render() { 
        console.log(this.state)
        return (
            <div>
                <h1>Username:</h1><input name="username" onChange={this.handleInput} value={this.state.username}></input>
                <h1>Password:</h1><input name="password" onChange={this.handleInput} value={this.state.password}></input>
               <Link to='/'><button onClick={this.loginUser}>Login</button></Link>
               <Link to='/'><button onClick={this.registerUser}>Register</button></Link>
            </div>
          );
    }
}
 
export default Auth;