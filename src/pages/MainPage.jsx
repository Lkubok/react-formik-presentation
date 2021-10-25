import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

import { userFormSchema } from "../schemas";

import "../styles/MainPage.css";

const initialValues = {
  userName: "",
  secondName: "",
  email: "",
  password: "",
  passwordRepeat: "",
  shortInfo: "",
  checkBox: false,
};

export default function MainPage() {
  return (
    <div className="container">
      <Formik
        validationSchema={userFormSchema}
        onSubmit={console.log}
        initialValues={initialValues}
        isInitialValid={false}
      >
        {({ handleChange, handleBlur, values, touched, isValid, errors }) => {
          return (
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="User name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.userName && errors.userName}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Second name</Form.Label>
                <Form.Control
                  name="secondName"
                  type="text"
                  placeholder="Second name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.secondName && errors.secondName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.email && errors.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.password && errors.password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat your password</Form.Label>
                <Form.Control
                  name="passwordRepeat"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.passwordRepeat && errors.passwordRepeat}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Short info about you</Form.Label>
                <Form.Control
                  name="shortInfo"
                  as="textarea"
                  placeholder="Short info about you"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.shortInfo && errors.shortInfo}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Just accept - we will give your kidney to a homeless bum"
                  name="checkBox"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.checkBox && errors.checkBox}
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={!isValid}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
