import * as React from 'react';
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';

const StyledLink = styled(props => <AnchorLink {...props} />)`
  display:block;
  color:white;
  font-size:calc(1rem + (1.5 - 1) * ((100vw - 25rem) / (80 - 25)));
  text-decoration:none;
  &:hover {
    color: #a9a9a9;;
  }

`;

const NavBars = () => {
    return(
        <div className={styles.all}>
            <nav className={styles.navBar}>
                <div><StyledLink to='/#' ><StaticImage src='../../images/Vizao Logo Site.png' className={styles.primaryIcon}/></StyledLink></div>
                <ul className={styles.navList}>
                    <li className={styles.listItem}>
                        <StyledLink> About</StyledLink>
                    </li>
                    <li className={styles.listItem}>
                        <StyledLink>Work</StyledLink>
                    </li>
                    <li className={styles.listItem}>
                        <StyledLink>Contact Us</StyledLink>
                    </li>
                </ul>
                <label className={styles.menu} for="toggle">
                    <div className={styles.menuLine}> </div>
                    <div className={styles.menuLine}> </div>
                    <div className={styles.menuLine}> </div>
                </label>
                <input type="checkbox" id="toggle" className={styles.toggle}/>
            </nav>
        </div>
    )
}


export default NavBars;