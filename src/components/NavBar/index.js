import * as React from 'react';
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const StyledLink = styled(props => <AnchorLink {...props} />)`
  padding:1.875rem;
  display:block;
  color:white;
  font-size:calc(0.8rem + (1.5 - 0.8) * ((100vw - 25rem) / (80 - 25)));
  text-decoration:none;
  &:hover {
    color: #a9a9a9;;
  }
  @media all and (max-width: 768px) {
    padding:1rem;
  }
`;


const NavBar = ({children}) => {
    return(
        <div className={styles.navbar}>
                <nav className={styles.navbarInner}>
                    <Link to='/#home' className={styles.logo2}>Vizao</Link>
                    <label className={styles.label} for="toggle" >&#9776;</label>
                    <input type="checkbox" id="toggle" className={styles.toggle}/>
                    
                    
                    <div className={styles.textdiv}>
                    <Link to='/#home' className={styles.logo}>Vizao</Link>
                    <div className={styles.dleft}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><StyledLink to="/#about">About</StyledLink></li>
                        <li className={styles.listItem}><StyledLink to="/#work">Work</StyledLink></li>
                    </ul>
                    <AnchorLink to="/#contact" className={styles.bLink} ><button className={styles.button}>Contact Us</button></AnchorLink>
                    </div>
                    </div>
                  
                </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default NavBar;