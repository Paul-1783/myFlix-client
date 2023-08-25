import "./modaledelete.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteModal = ({
  user,
  token,
  setUser,
  setToken,
  setFavMovies,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    fetch(
      `https://myflicsdb3.onrender.com/users/${encodeURIComponent(
        user.username
      )}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        //call logout function
        setUser(null);
        setToken(null);
        setFavMovies([]);
        localStorage.clear();
        alert("User successfully removed from database.");
        return response.json();
      } else {
        alert("Couldn't remove user from database. " + response.status);
        return;
      }
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        className="text-dark hover-effect"
        onClick={handleShow}
      >
        Delete Profile
      </Button>

      <Modal show={show} onHide={handleClose} variant="secondary" centered>
        <Modal.Header closeButton className="bg-warning text-secondary">
          <Modal.Title>Delete Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary text-dark">
          Do you really want to delete this profile?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="text-dark"
            onClick={handleClose}
          >
            I changed my mind
          </Button>
          <Button
            variant="primary"
            className="text-dark"
            onClick={handleDelete}
          >
            Yes I do
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
