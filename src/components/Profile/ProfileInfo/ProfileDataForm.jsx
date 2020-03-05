import React from "react";
import { reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea
} from "../../common/formsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import styles from "../../common/formsControls/FormsControls.module.css";
import { saveProfile } from "../../../redux/profile-reducer";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
        {error && <div className={styles.formSummaryBody}>{error}</div>}
      </div>
      <div>
        <b>Full name</b>:{" "}
        {createField("Full Name", "fullName", required, Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My Professinal skils</b>
        {createField(
          "My Professinal skils",
          "lookingForAJobDescription",
          required,
          Textarea
        )}
      </div>
      <div>
        <b>About Me</b>
        {createField("About Me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
