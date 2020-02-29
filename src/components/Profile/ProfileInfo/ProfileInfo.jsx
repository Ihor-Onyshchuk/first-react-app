import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        ava + description
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
