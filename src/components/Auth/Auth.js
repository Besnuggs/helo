import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux';
import {updateStateValues} from './../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
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
         axios.post(`/api/auth/register`, {username: this.state.username, password: this.state.password}).then(res =>{
             let info = res.data
             this.props.updateStateValues(info)
         }
         )
     }

     loginUser(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(res =>{
            let info = res.data
            this.props.updateStateValues(info)
        })
     }

    render() { 
        return (
            <div>
                <h1>Username:</h1><input name="username" onChange={this.handleInput} value={this.state.username}></input>
                <h1>Password:</h1><input name="password" onChange={this.handleInput} value={this.state.password}></input>

               <Link to='/Dashboard'><button onClick={this.loginUser}>Login</button></Link>

               <Link to='/Dashboard'><button onClick={this.registerUser}>Register</button></Link>
            </div>
          );
    }
}
 
export default connect (null, {updateStateValues}) (Auth);