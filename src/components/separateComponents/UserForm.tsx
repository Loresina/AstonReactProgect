import React, { useEffect, useState } from "react";

import { type FormikValues, useFormik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import useAuth from "../../hooks/useAuth";
import {
  getAuthStatus,
  getAuthErrorState,
} from "../../slices/getStateVars/getStateVars";
import { addNewUser } from "../../slices/signUser/addNewUser";
import { checkAuth } from "../../slices/signUser/checkAuth";

const renderInput = (
  inputName: string,
  formik: FormikValues,
  label: string,
): React.JSX.Element => {
  return (
    <div className="user-form-input">
      <label htmlFor={inputName}>
        {label} {inputName}
      </label>
      <input
        id={inputName}
        name={inputName}
        type="text"
        onChange={formik.handleChange}
        value={formik.values[inputName]}
        placeholder={`Enter your ${inputName}`}
        onBlur={formik.handleBlur}
      />

      {formik.touched[inputName] !== undefined &&
      formik.errors[inputName] !== undefined ? (
        <span className="validation-error">{formik.errors[inputName]}</span>
      ) : null}
    </div>
  );
};

const UserForm = ({ title }: { title: string }): React.JSX.Element => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const dispatch = useAppDispatch();
  const authStatus = useSelector(getAuthStatus);
  const authError = useSelector(getAuthErrorState);
  const [auth, setAuth] = useState(authStatus);

  useEffect(() => {
    setAuth(authStatus);
  }, [authStatus]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("mast be valid email").required("!"),
      password: yup
        .string()
        .required("!")
        .min(6, "! min 6")
        .max(10, "! max 10"),
      ...(title === "Sign Up" && {
        confirmPassword: yup
          .string()
          .required("!")
          .oneOf([yup.ref("password")], "passwords must match"),
      }),
    }),
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      switch (title) {
        case "Sign Up":
          void dispatch(addNewUser(email, password, logIn, navigate));
          break;

        case "Sign In":
          void dispatch(checkAuth(email, password, logIn, navigate));
          break;

        default:
          break;
      }
    },
  });

  return (
    <div className="container">
      <div className="user-container">
        <div className="user-form">
          <h1>{title}</h1>
          <form onSubmit={formik.handleSubmit}>
            {renderInput("email", formik, "Enter your")}

            {renderInput("password", formik, "Enter your")}

            {title === "Sign Up"
              ? renderInput("confirmPassword", formik, "Confirm your")
              : null}

            {auth === "unsuccess" ? <span>{authError}</span> : null}

            <button type="submit">{title}</button>

            {title === "Sign Up" ? (
              <span>
                Already registered? <br />
                <a href="/onSign">Sign in</a>
              </span>
            ) : (
              <span>
                You do not have an account? <br />
                <a href="/signUp">Sign up</a>
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export { UserForm };
