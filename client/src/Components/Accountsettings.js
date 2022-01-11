import React from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Accountsettings() {
    return (
        <div>
            <Container>
            <br/>
                <DropdownButton id="dropdown-basic-button" title="Account Settings">
                    <Dropdown.Item as={Link} to="/edit-account">Edit Account</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/change-password">Change Password</Dropdown.Item>
                </DropdownButton>
            </Container>
        </div>
    );
}

export default Accountsettings;