/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const history = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('userInfo');
    history('/');
  };
   
  const value = useContext(AuthContext);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">ChefHouse</Navbar.Brand>

          <Nav className="ml-auto">
            {/* <Nav.Link href="/cart"><i className="fas fa-shopping-cart pr-2"></i>Cart</Nav.Link>
            {
               userInfo ? (
                 <NavDropdown title={userInfo.name} id="username">
                     <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                   </LinkContainer>
                     
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                 </NavDropdown>  
               ):(
               <Nav.Link href="/login"><i className="fas fa-user pr-2"></i>Sign In</Nav.Link> 
               )
            } */}
            {
              value.userData && 
              <NavDropdown title={value.userData?.name} id="userAdmin">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              
            }
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
