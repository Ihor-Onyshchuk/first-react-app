import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Input, createField } from "../common/formsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "../common/formsControls/FormsControls.module.css";

const maxLength40 = maxLengthCreator(40);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required, maxLength40], Input)}
      {createField("Password", "password", [required, maxLength40], Input, {
        type: "password"
      })}
      {createField(
        null,
        "rememberMe",
        null,
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={styles.formSummaryBody}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
