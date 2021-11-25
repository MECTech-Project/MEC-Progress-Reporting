import React from "react";
import { Card, Button ,Col } from "react-bootstrap";
import UsersList from "./users";

function handleClick(){
  console.log("I was clicked")
}


function UsersIcons(){
    let users = UsersList.map((user) => {

        return (
            <Col xs={6} md={4} lg={4} key={user.id}>
              <Card  border="dark" style={{ backgroundColor: '#c097c5'}}>
              <Card.Body className="text-center">
               <Card.Title>{user.name}</Card.Title>
               <hr/>
               <Button variant="dark" onClick={handleClick}>View User</Button>
               <hr/>
               <Button variant="dark" onClick={handleClick}>Delete User</Button>
               </Card.Body>
              </Card> 
            </Col>
          );
    });
    return (
        <div className="container">
          <h2 className="text-center">Students Page</h2>
          <div className="group row">
            {users}    
          </div>
        </div>
      )
}

export default UsersIcons