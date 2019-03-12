import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        comments: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            
            this.setState({
                comments: res.data.slice(0, 10)
            })
          
        })
    }
    
    render() {
        const { comments } = this.state;
        const commentList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className='comment card '  key={comment.id}>
                        
                        <div className='card-content c'>
                            <Link to = {'/' + comment.id} >
                                <span className='card-title'>{comment.name}</span>
                            </Link>
                            {comment.id % 2===0 ? <img className="image1" src="arrow.jpeg" alt="oops! not found!" /> : <img className="image1" src="arrow.jpeg" alt="oops! not found!" />}
                            <ul>
                                <li>{comment.id}</li>
                                <li>{comment.email}</li>
                                <li>{comment.body}</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No comments yet </p>
        )
        
        return(
            <div className='center'>
                <br />    
                <h4 className='container'>Homepage</h4><br />
                { commentList }
            </div>
        )
    }
}

export default Home;

