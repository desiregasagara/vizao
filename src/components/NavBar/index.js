import * as React from 'react';
import * as styles from './styles.module.scss';
import Container from '../container';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const StyledLink = styled(props => <AnchorLink {...props} />)`
  padding:30px;
  display:block;
  color:white;
  font-size:24px;
  text-decoration:none;
  &:hover {
    color: #a9a9a9;;
  }

`;


const NavBar = ({children}) => {
    return(
        <div className={styles.navbar}>
            <Container>
                <div className={styles.navbarInner}>
                    <Link to='/#home' className={styles.logo}>Vizao</Link>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><StyledLink to="/#home">Home</StyledLink></li>
                        <li className={styles.listItem}><StyledLink to="/#about">About</StyledLink></li>
                        <li className={styles.listItem}><StyledLink to="/#work">Work</StyledLink></li>
                    </ul>
                    <AnchorLink to="/#contact" ><button className={styles.button}>Get in touch</button></AnchorLink>
                </div>
            </Container>
            <main>
                {children}
            </main>
        </div>
    )
}

export default NavBar;