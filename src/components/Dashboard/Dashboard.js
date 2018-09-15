import React, {Component} from 'react'
import { Checkbox } from 'react-bootstrap';
import Post from '../Post/Post';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
          }
          this.handleInput = this.handleInput.bind(this)
    }
    
    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
         })
     }

     getAllPosts(){

     }

render() { 
    const {posts} = this.state
    let postsList = posts.map((PostInfo, Index) => {
        const {title, author_username, profile_pic} = PostInfo

    return(
        <Post
        title={title}
        author={author_username}
        profile_pic={profile_pic}
        />
    )
 })
        return (
            <div>
                {postsList}
                <input name='search' value={this.state.search} onChange={this.handleInput}></input>
                <button>Search</button>
                <button>Reset</button>
                <Checkbox name='userposts'>My Posts</Checkbox>
            </div>
          );
    }
}
 
export default Dashboard;