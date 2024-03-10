// import React, { useState, useContext, useRef, useEffect } from "react";

import { useFormik } from "formik";
// import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";

// import AuthContext from "../Context/AuthContext";
// import mainImg from "../Img/mainImg.svg";
// import routes from "../Routes/routes";

const UserForm = ({ title }: { title: string }): React.JSX.Element => {
  //   const [showError, setShowError] = useState(false);
  //   const { logIn } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const inputFocus = useRef(null);

  //   useEffect(() => {
  //     inputFocus.current.focus();
  //   }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("не верно"),
      password: yup.string().required("не верно"),
    }),
    onSubmit: (values) => {
      console.log(
        "проверка логина и пароля, если нет - предложение о регистрации.",
        values,
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
            <label htmlFor="username">Enter your name</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              // ref={inputFocus}
              placeholder="Enter your name"
            />
            <label htmlFor="password">Enter your password</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              // ref={inputFocus}
              placeholder="Enter your password"
            />
            <button>{title}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { UserForm };
