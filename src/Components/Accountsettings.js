import React from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';


function Accountsettings() {
    return (
    
    <div>

        <Container>
        <br/>

        <DropdownButton id="dropdown-basic-button" title="Account Settings">
            <Dropdown.Item href="/Components/Editaccount">Edit Account</Dropdown.Item>
            <Dropdown.Item href="/Components/Changepass">Change Password</Dropdown.Item>
        </DropdownButton>
        </Container>



    </div>
  
    );

}

export default Accountsettings;