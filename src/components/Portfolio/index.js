import * as React from 'react';
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration:underline;
    color: #fff;
    &:hover {
        color: #fff;
        text-decoration:underline;
    } 
    &:visited {
        color: #a9a9a9;
    } 
`;

const Portfolio = () =>{
    return(
        <div className={styles.background}>
            <div id="work">
            <h2 className={styles.pageTitle} data-sal="slide-up" data-sal-delay= "100" data-sal-easing="linear"> Our Past Work:</h2>
            <p className={styles.description} data-sal="slide-up" data-sal-delay="300" data-sal-easing="linear">We are very proud of the projects we've worked on. Here is  
            <StyledLink href='https://codepen.io/Vizao' target="_blank" rel="noreferrer"> some of the previous work we've done.</StyledLink></p>
            </div>
            <div className={styles.project1} data-sal="slide-up" data-sal-delay="300" data-sal-duration="400" data-sal-easing="linear">
                <StyledLink
                href="https://vtsafrica.net"
                target="_blank"
                className={styles.projectTitle}
                >
                <StaticImage
                    className={styles.projectImage}
                    src="../../images/vts2.png"
                    alt="Example of developed website by Vizao Uk"
                />
                <p className={styles.projectTitle}>
                    <span className={styles.code}></span>
                    Case Study 1:
                    <span className={styles.code}></span>
                </p>
                </StyledLink>
               
            </div>
            <div className={styles.project2} data-sal="slide-up" data-sal-delay="600" data-sal-duration="400">
                <StyledLink
                href="https://codepen.io/Vizao/full/VwyQdPo"
                target="_blank"
                className={styles.projectTitle}
                >
                <StaticImage
                    className={styles.projectImage2}
                    src="../../images/plp.png"
                    alt="Example of developed website by Vizao Uk"
                />
                <p className={styles.projectTitle}>
                    <span className={styles.code}></span>
                    Case Study 2:
                    <span className={styles.code}></span>
                </p>
                </StyledLink>
                
            </div>
            <div className={styles.clear}></div>
    </div>
    )

}

export default Portfolio