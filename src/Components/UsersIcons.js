import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import UsersList from "./users";


function UsersIcons() {

  const [deleted, setDeleted] = useState(UsersList);

  function handleClick() {
    console.log("I was clicked")
  }

  function handleDeleteUser(id) {
    setDeleted(deleted.filter(user => user.id !== id))
    console.log(" deleted")
  }
  return (
    <div className="container">
      <h2 className="text-center">Students Page</h2>
      <div className="group row">
        {deleted.map(user => (
          <Col xs={6} md={4} lg={4} key={user.id}>
            <Card border="dark" style={{ backgroundColor: '#c097c5' }}>
              <Card.Body className="text-center">
                <Card.Title>{user.name}</Card.Title>
                <hr />
                <Button variant="dark" onClick={handleClick}>View User</Button>
                <hr />
                <Button variant="dark" onClick={() => handleDeleteUser(user.id)}>Delete User</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        );
      </div>
    </div>
  )
}

export default UsersIcons