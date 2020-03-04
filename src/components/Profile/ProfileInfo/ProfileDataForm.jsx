import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea
} from "../../common/formsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Full name</b>: {createField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "fullName", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My Professinal skils</b>: {profile.lookingForAJobDescrition}
        {createField(
          "My Professinal skils",
          "lookingForAJobDescrition",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About Me</b>: {profile.aboutMe}
        {createField("About Me", "aboutMe", [], Textarea)}
      </div>
      {/* <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map(key => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
