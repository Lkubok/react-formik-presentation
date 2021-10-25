import React, { useState } from "react";
import "../styles/MainPage.css";
import { validateEmail } from "../utils";

import { Form, Button } from "react-bootstrap";

export default function MainPage() {
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleFieldChange = (fieldName) => (fieldValue) => {
    if (fieldName === "email") {
      setEmail(fieldValue);
      setIsEmailTouched(false);
      if (validateEmail(fieldValue)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }
  };

  const handleFieldBlur = (fieldName) => () => {
    if (fieldName === "email") {
      setIsEmailTouched(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("EMAIL VALUE IN STATE", email);
  console.log("IS EMAIL VALID", isEmailValid);

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="User name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Second name</Form.Label>
          <Form.Control type="text" placeholder="Second name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(e) => handleFieldChange("email")(e.target.value)}
            isInvalid={isEmailTouched && !isEmailValid && "Wrong email"}
            onBlur={handleFieldBlur("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat your password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Short info about you</Form.Label>
          <Form.Control as="textarea" placeholder="Short info about you" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Just accept - we will give your kidney to a homeless bum"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
