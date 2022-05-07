import React from 'react';
import { Container, Navbar } from 'react-bootstrap'
import "./Navbar.css";
import { IoLogOut, IoEnter } from "react-icons/io5";

function Navigation({user}) {

  return (
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand href="#home">Chat-Chat</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {
            user ? 
            <Navbar.Text>
            Signed in as: <span className="userName">Elmar A</span>
            <a href="#login">
            <IoLogOut className="signIcon"/>
            </a>
            
            </Navbar.Text>
            :
            <Navbar.Text>
            Please, sigin:
              <IoEnter className="signIcon" />
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
