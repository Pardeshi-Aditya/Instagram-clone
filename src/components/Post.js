import React from 'react'
import './Post.css'

const Post = (postId, user, username, caption, imageUrl) => {
    return (
        <div className='post'>
            <div className="post_header">

            </div>
            <img src={imageUrl} alt="postImage" />
            <h4 className="post_text">
                <strong>{username}</strong>
                {caption}
                </h4>
                <form className='post_commentBox'>
                    <input className='post_input' placeholder='Add Comment' type="text"/>
                    <button type='submit' className='post_button'>Post</button>
                </form>
        </div>
    )
}

export default Post
