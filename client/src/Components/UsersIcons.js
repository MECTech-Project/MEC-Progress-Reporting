import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
import UsersAdmin from './UsersAdmin'
import Axios from "axios";

function UsersIcons() {

  // incomplete
  const [listOfUsers, setListOfUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      });
  }, []);


  // incomplete
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:5000/deleteUser/${id}`)
      .then(() => {
        setListOfUsers(
          listOfUsers.filter((user) => {
            return user._id !== id;
          })
        );
        // console.log("success")
      });
  };

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
              <Col xs={6} md={4} lg={4} key={user._id}>
                <Card border="dark" style={{ backgroundColor: '#c097c5' }}>
                  <Card.Body className="text-center">
                    <Card.Title>
                      {/* {user._id}. */} 
                      {user.firstName} {user.lastName}
                    </Card.Title>
                    <hr />
                    <Button variant="dark">View User</Button>
                    <hr />
                    <Button onClick={() => {
                      deleteUser(user._id);
                    }}
                      variant="dark"
                    >
                      Delete User
                    </Button>
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