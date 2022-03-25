import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from  './styles.module.scss';
{/*The hero page is split into three elements, in order to accomodate for top image animation

*/
}
const IntroBlock = () =>{
    return(
        <div className={styles.heroContainer} >
            <div className={styles.content}>
                <StaticImage src='../../images/halfvine2.jpg' imgClassName={styles.img} className={styles.imgContainer}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.HeroText}>A digital product studio <br/> that turns your vision into a reality. </h1>
                <button className={styles.btn}><AnchorLink to="/#about" className={styles.link}>Know More</AnchorLink></button>
            </div>
            
            <StaticImage src='../../images/child2.jpg'
            className={styles.img2} />
    
            
    </div>    
    )
}

export default IntroBlock