import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: '20'},
    {id: 2, message: 'It is my first post', likesCount: '12'}
  ]

  let postsElements = posts.map( p =>  <Post message={p.message} likes={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>AddPost</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;