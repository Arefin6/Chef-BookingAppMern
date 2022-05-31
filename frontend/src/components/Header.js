/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  // const [data,setData] = useState(null)
  const handleLogout = () => {};
   
  const userInfo =  sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')):null

  console.log(userInfo)


  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ChefHouse</Navbar.Brand>

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
              userInfo?( 
              <NavDropdown title={userInfo?.name} id="userAdmin">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              )
              :
              (
                <h1>f</h1>
              )
            }
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
