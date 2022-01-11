import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import UsersList from "./users";
import UsersAdmin from './UsersAdmin'


function UsersIcons() {

  const [deleted, setDeleted] = useState(UsersList);

  
  function handleDeleteUser(id) {
    setDeleted(deleted.filter(user => user.id !== id))
    console.log(" deleted")

  }

  const [showResults, setShowResults] = useState({
    UsersIcons: true,
    UsersAdmin: false
})
const clickUser = () => setShowResults({
  UsersIcons: false,
  UsersAdmin: true
})
console.log("UsersIcons:", showResults.UsersIcons === true)
console.log("UsersAdmin:", showResults.UsersAdmin === true)

  return (
    <div className="container">
      {showResults.UsersIcons ? <div> <h2 className="text-center">Students Page</h2>
      <div className="group row">
        {deleted.map(user => (
          <Col xs={6} md={4} lg={4} key={user.id}>
            <Card border="dark" style={{ backgroundColor: '#c097c5' }}>
              <Card.Body className="text-center">
                <Card.Title>{user.name}</Card.Title>
                <hr />
                <Button variant="dark" onClick={clickUser}>View User</Button>
                <hr />
                <Button variant="dark" onClick={() => handleDeleteUser(user.id)}>Delete User</Button>
              </Card.Body>
            </Card>
              
          </Col>
        ))}
      </div> </div> : null }
            {showResults.UsersAdmin ? <UsersAdmin /> : null }
    </div>
  )
}



export default UsersIcons