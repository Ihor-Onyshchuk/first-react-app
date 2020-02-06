import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtBUS57ZC6zv8XSL0kTRugyKd56ZAYBNFHAkY1iOWdFrkbrkLs"></img>
      {props.message}
      <div>
        <span>Lukas: <span className={s.lukas}>{props.likes}</span></span>
      </div>
    </div>
  );
}

export default Post;