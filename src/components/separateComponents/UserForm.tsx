import React, { useRef, useEffect } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

const UserForm = ({ title }: { title: string }): React.JSX.Element => {
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }
  }, []);

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
      confirmPassword: yup
        .string()
        .required("!")
        .oneOf([yup.ref("password")], "passwords must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // 1. проверка - регистрация это или вход.
      // 2. ЕСЛИ ВХОД
      // здесь реализовать запрос на сервер - информация о регистрации пользователя.
      // Если регистрация есть - logIn,
      // если регистрации нет - сообщение о недачной регистрации.
      // 2. ЕСЛИ РЕГИСТРАЦИЯ
      // отправляем на сервер данные о регистрации
      // затем - logIn
      // Для запроса регистрации на сервер - сделать Thunk, который будет запускать дальнейшее действие
      // Или не делать Thunk - не знаю пока.
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
                ref={inputFocus}
                placeholder="Enter your name"
                onBlur={formik.handleBlur}
              />

              {formik.touched.email !== undefined &&
              formik.errors.email !== undefined &&
              formik.values.email.length > 0 ? (
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
                />

                {formik.touched.password !== undefined &&
                formik.errors.password !== undefined ? (
                  <span className="validation-error">
                    {formik.errors.password}
                  </span>
                ) : null}
              </div>
            ) : null}

            <button type="submit">{title}</button>

            {title === "Sign Up" ? (
              <span>
                Already registered? <a href="./signIn">Sign up</a>
              </span>
            ) : (
              <span>
                You do not have an account?
                <a href="./signUp">Sign in</a>
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export { UserForm };
