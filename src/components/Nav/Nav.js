import React from 'react'
import {Link} from 'react-router-dom'

function Nav (){

    // (location.pathname: {this.props.location.pathname})
    return(
        <div>
            <h1>Nav</h1>
            <Link to='/Dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}


export default Nav