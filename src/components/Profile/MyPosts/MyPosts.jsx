import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/FormsControls";

const MyPosts = React.memo(props => {
  console.log("render yo");
  let postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likes={p.likesCount} />
  ));

  let addNewPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostText"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>AddPost</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
