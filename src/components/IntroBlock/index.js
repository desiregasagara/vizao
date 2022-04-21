import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from  './styles.module.scss';
/*The hero page is split into three elements, in order to accomodate for top image animation

*/

const IntroBlock = () =>{
    return(
        <div className={styles.heroContainer} >
            <div className={styles.content}>
                <StaticImage src='../../images/halfvine2.jpg' loading= "eager" imgClassName={styles.img} className={styles.imgContainer} alt="Vine animation , illustrating accomplished visions, growing onto Vizao website"/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.HeroText}>A digital product studio <br/> that turns your vision into a reality. </h1>
                <AnchorLink to="/#about" className={styles.link}> <button className={styles.btn}>Know More</button></AnchorLink>
            </div>
            
            <StaticImage src='../../images/child2.jpg'
            loading= "eager"
            alt="Child pointing up to vine, illustrating hopeful youth, on Vizao website"
            className={styles.img2} />
    
            
    </div>    
    )
}

export default IntroBlock