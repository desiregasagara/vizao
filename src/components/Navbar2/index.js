import * as React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min";
import {Nav,Navbar,Container} from 'react-bootstrap'
import * as styles from './styles.module.scss';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

if(window !== "undefined"){

const StyledLink = styled(props => <AnchorLink {...props} />)`
  display:block;
  color:white;
  font-size:calc(1rem + (1.5 - 1) * ((100vw - 25rem) / (80 - 25)));
  text-decoration:none;
  &:hover {
    color: #a9a9a9;;
  }

`;

   
  
const NavBar2 = () => {
    return(
       <div>
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.navBar}>
                <Container>
                <Navbar.Brand className={styles.logo}>Vizao</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={"ms-auto"}>
                        <Nav.Link className={"nav-item nav-link px-4"} ><StyledLink to="/#about">About</StyledLink></Nav.Link>
                        <Nav.Link className={"nav-item nav-link px-4"}><StyledLink to="/#work">Work</StyledLink></Nav.Link>
                        
                    </Nav>
                    <AnchorLink to="/#contact" className={"nav-item nav-link mr-2"} ><button className={styles.button}>Contact Us</button></AnchorLink>
                    
                </Navbar.Collapse>
                </Container>
                </Navbar>
        
        </div>
    )
}
}

    
export default NavBar2;
