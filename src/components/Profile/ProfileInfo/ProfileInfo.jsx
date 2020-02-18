import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  const data = {
    ...props.profile
  };

  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={data.photos.large} />
        <div>
          <ins>About Me:</ins>
          <div>{data.aboutMe}</div>
        </div>
        <div>
          <ins>Contacts:</ins>
        </div>
        <div>{data.contacts.facebook}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
