import * as React from 'react';
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration:none;
    color: #a9a9a9;
    &:hover {
        color: #a9a9a9;
        text-decoration:underline;
    } 
    &:visited {
        color: #a9a9a9;;
    } 
`;

const Portfolio = () =>{
    return(
        <div className={styles.background}>
            <div className={styles.headingText} id="work">
            <h2> Our Past Work:</h2>
            <p className={styles.description}>We are very proud of the projects we've worked on. You can see some of them 
            <StyledLink href='https://codepen.io/Vizao' target="_blank" rel="noreferrer"> here.</StyledLink></p>
            </div>
            <div className={styles.project1}>
                <StyledLink
                href="https://codepen.io/Vizao/full/vYWrQRV"
                target="_blank"
                className={styles.projectTitle}
                >
                <StaticImage
                    className={styles.projectImage}
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg"
                    alt="project"
                />
                <p className={styles.projectTitle}>
                    <span className={styles.code}></span>
                    Case Study 1:
                    <span className={styles.code}></span>
                </p>
                </StyledLink>
               
            </div>
            <div className={styles.project2}>
                <StyledLink
                href="https://codepen.io/Vizao/full/xxPJqZz"
                target="_blank"
                className={styles.projectTitle}
                >
                <StaticImage
                    className={styles.projectImage2}
                    src="../../images/Surveyform.png"
                    alt="project"
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