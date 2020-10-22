import React, {useEffect, useState} from 'react'
import './Posts.css'
//import Button from '@material-ui/core/Button'
import InstagramEmbed from 'react-instagram-embed'
import db from '../firebase'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, [])

    return (
        <div className='posts'>
            <div className='posts_left'>
                {
                    posts.map(({ id, post })=>(
                        <post postId={id} user={currentUser} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                    ))
                }
            </div>
            <div className='posts_right'>
                <InstagramEmbed 
                    url="https://www.instagram.com/p/B-kZfo-JJal/?utm_source=ig_web_copy_link"
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>
        </div>
    )
}

export default Posts
