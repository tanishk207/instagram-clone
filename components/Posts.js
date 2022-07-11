import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import Post from './Post';
import { db } from '../firebase'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const unsubcribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
            setPosts(snapshot.docs);
        })
        return unsubcribe
    }, [db])

    return (
        <div>
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts