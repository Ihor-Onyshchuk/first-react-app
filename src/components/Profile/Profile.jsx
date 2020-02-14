import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
      <div className='app-wrapper-content'>
        <ProfileInfo/>
        <MyPostsContainer />
      </div>
    );
}

export default Profile;