import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  const data = {
    ...props.profile
  };

  return (
    <div>
      {/* <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={data.photos.large} />
        ava + description
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
