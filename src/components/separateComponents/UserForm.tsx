import React, { useRef, useEffect } from "react";

import { useFormik } from "formik";
// import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";

// import AuthContext from "../Context/AuthContext";
// import mainImg from "../Img/mainImg.svg";
// import routes from "../Routes/routes";

const UserForm = ({ title }: { title: string }): React.JSX.Element => {
  // const [showError, setShowError] = useState(false);
  // const { logIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("!")
        .min(3, "! min 3")
        .max(20, "! max 20"),
      password: yup
        .string()
        .required("!")
        .min(6, "! min 6")
        .max(10, "! max 10"),
    }),
    onSubmit: (values) => {
      console.log(
        "проверка логина и пароля, если нет - предложение о регистрации.",
      );
    },
  });

  // const getPasswordError = () => {
  //   if (formik.submitCount > 0 && !!formik.errors.password) {
  //     return formik.errors.password;
  //   }
  //   if (showError) {
  //     return t("loginMistake");
  //   }
  //   return false;
  // };

  return (
    <div className="container">
      <div className="user-container">
        <div className="user-form">
          <h1>{title}</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="user-form-input">
              <label htmlFor="username">Enter your name</label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                // ref={inputFocus}
                placeholder="Enter your name"
                onBlur={formik.handleBlur}
              />
              {formik.touched.username !== undefined &&
              formik.errors.username !== undefined ? (
                <span className="validation-error">
                  {formik.errors.username}
                </span>
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
              />

              {/* {console.log(formik.touched.usernsme, formik.errors.user )} */}

              {formik.touched.password !== undefined &&
              formik.errors.password !== undefined ? (
                <span className="validation-error">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>

            <button type="submit">{title}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { UserForm };
