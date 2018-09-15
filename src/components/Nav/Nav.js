import React from 'react'
// import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav (props){
    // (location.pathname: {this.props.location.pathname})
    console.log(props)
    return(
        
        <div>
            <h1>Nav</h1>
            {props.profile_pic}
            {props.username}

            <Link to='/Dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state){
const {username, profile_pic} = state
    return{
    username,
    profile_pic
}
}

export default connect (mapStateToProps) (Nav)