import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
// import UsersList from "./users";
import UsersAdmin from './UsersAdmin'
import Axios from "axios";

function UsersIcons() {

  // incomplete
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId,] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);


  // incomplete
  const deleteUser = () => {
    Axios.delete("http://localhost:3001/deleteUser", {
      // userId,
    }).then((response) => {
      setListOfUsers()
      console.log("success")
    });
  };

  // incomplete
  // function handleDeleteUser(id) {
  //   setDeleted(deleted.filter(user => user.id !== id))
  //   console.log(" deleted")
  // }

  //  onClick={() => handleDeleteUser(user.id)}

  const [showResults, setShowResults] = useState({
    UsersIcons: true,
    UsersAdmin: false
  })
  // incomplete
  const clickUser = () => setShowResults({
    UsersIcons: false,
    UsersAdmin: true
  })
  console.log("UsersIcons:", showResults.UsersIcons)
  console.log("UsersAdmin:", showResults.UsersAdmin)

  return (
    <div className="container">

      {showResults.UsersIcons ?
        <div>
          <h2 className="text-center">Students Page</h2>
          <div className="group row">
            {listOfUsers.map(user => (
              <Col xs={6} md={4} lg={4} key={user.id}>
                <Card border="dark" style={{ backgroundColor: '#c097c5' }}>
                  <Card.Body className="text-center">
                    <Card.Title>{user.userId}. {user.firstName} {user.lastName}</Card.Title>
                    <hr />
                    <Button variant="dark">View User</Button>
                    <hr />
                    <Button onClick={deleteUser} variant="dark"> Delete User </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </div>
        : null
      }

      {showResults.UsersAdmin ? <UsersAdmin /> : null}
    </div>
  )
}
export default UsersIcons