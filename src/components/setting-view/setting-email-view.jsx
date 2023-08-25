import { Button, Form, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import "./setting-view.scss";

export const SetEmailView = ({ user, token, setUser }) => {
  const [Email, setEmail] = useState(user.email);
  const [Password, setPassword] = useState("");
  const [ControlPassword, setControlPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (ControlPassword === Password) {
      const data = {
        username: user.username,
        password: Password,
        email: Email,
        birthday: user.birthday,
      };
      fetch(
        `https://myflicsdb3.onrender.com/users/${encodeURIComponent(
          user.username
        )}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Update response: " + data);
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            alert("Successfully updated!");
          } else {
            console.log("data: ", data);
            alert("user in current session not yet locally updated");
          }
        })
        .catch((e) => {
          console.log("error, ", e);
          alert("Something went wrong.");
        });
    } else {
      alert("Entered Passwords weren't identical.");
      return;
    }
  };

  return (
    <Row>
      <Form onSubmit={handleSubmit}>
        <Col className="d-flex justify-content-center mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mt-5 mb-5">Enter new Email here:</Form.Label>
            <Form.Control
              type="text"
              value={Email}
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Label className="mt-5 mb-5">Password:</Form.Label>
            <Form.Control
              type="text"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Label className="mt-5 mb-5">Password confirm:</Form.Label>
            <Form.Control
              type="text"
              value={ControlPassword}
              onChange={(e) => setControlPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <Button
            className="text-dark btn-lg border-dark hover-effect"
            type="submit"
          >
            Submit
          </Button>
        </Col>
      </Form>
    </Row>
  );
};
