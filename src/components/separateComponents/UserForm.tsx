import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import useAuth from "../../hooks/useAuth";
import { addNewUser } from "../../slices/signUser/addNewUser";
import { checkAuth } from "../../slices/signUser/checkAuth";
import type { RootState } from "../../types/dataTypes";

const UserForm = ({ title }: { title: string }): React.JSX.Element => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const dispatch = useAppDispatch();
  const authStatus = useSelector(
    (state: RootState) => state.userInfo.authStatus,
  );
  const authError = useSelector((state: RootState) => state.userInfo.error);
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
            <div className="user-form-input">
              <label htmlFor="email">Enter your name</label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your name"
                onBlur={formik.handleBlur}
              />

              {formik.touched.email !== undefined &&
              formik.errors.email !== undefined ? (
                <span className="validation-error">{formik.errors.email}</span>
              ) : null}
            </div>

            <div className="user-form-input">
              <label htmlFor="password">Enter your password</label>
              <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter your password"
                onBlur={formik.handleBlur}
              />

              {formik.touched.password !== undefined &&
              formik.errors.password !== undefined ? (
                <span className="validation-error">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>

            {title === "Sign Up" ? (
              <div className="user-form-input">
                <label htmlFor="confirmPassword">Confirm your password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  placeholder="Confirm your password"
                  onBlur={formik.handleBlur}
                />

                {formik.touched.confirmPassword !== undefined &&
                formik.errors.confirmPassword !== undefined ? (
                  <span className="validation-error">
                    {formik.errors.confirmPassword}
                  </span>
                ) : null}
              </div>
            ) : null}

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
