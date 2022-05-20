import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

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
            {/* {
              userInfo && userInfo.isAdmin && (

                <NavDropdown title='Admin' id="userAdmin">

                     <LinkContainer to='/admin/userList'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                   </LinkContainer>

                   <LinkContainer to='/admin/productList'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                   </LinkContainer>
                     
                   <LinkContainer to='/admin/orders'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                   </LinkContainer> 
                   <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                     
                 </NavDropdown>  
              )  
            } */}
            
           </Nav> 
           </Container>  
        </Navbar>
        </header>
    );
};

export default Header;