import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from  './styles.module.scss';

const About = () =>{
    return(
    <div className={styles.background} id="about">
        <div className={styles.introText }  data-sal="slide-up"  data-sal-duration="200" data-sal-easing="linear">
            <hr className={styles.lines} ></hr>
            <h2 className={styles.pageTitle}> We build seamless Web and Mobile Software</h2>
            <hr className={styles.lines} ></hr>
            </div>
        
            <p className={styles.description} data-sal="slide-up"  data-sal-duration="400" data-sal-easing="linear" >We are a software development and UI//UX company based in the UK that place customer experience and top quality delivery at the forefront of everything we do.</p>
        <div data-sal="slide-up" data-sal-easing="linear" >
        <h2 className={styles.header}>Our Workflow</h2>
        <div classname={styles.imageBar}   >
            <div className={styles.imageDetails} data-sal="slide-up"  data-sal-duration="200" data-sal-easing="linear">
                <StaticImage src="../../images/hal-gatewood-tZc3vjPCk-Q-unsplash_ccexpress.jpeg" 
                alt="sketch of app concepts"
                className={styles.image1}
                />
            </div>
            <div className={styles.container}>
                <h3 className={styles.textTitles} data-sal="slide-up"  data-sal-duration="200" data-sal-easing="linear">Discover</h3>
                <p className={styles.textDescriptions}data-sal="slide-up"  data-sal-duration="400"  data-sal-easing="linear">Finding an optimal solution is the key to your digital product's success. Our 
                digital team works with you to solve problems, legitimize your ideas and create the ideal roadmap for your organisation's digital journey.
                </p>
            </div>
            <div className={styles.clear}></div>
        
        </div>
        </div>
        <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="300">
        <div classname={styles.imageBar} >
            <div className={styles.imageDetails2}>
                <StaticImage src="../../images/amelie-mourichon-sv8oOQaUb-o-unsplash_ccexpress.jpeg" 
                alt="sketch of app concepts"
                className={styles.image2}
                />
            </div>
            <div className={styles.containerTwo}>
                <h3 className={styles.textTitles} data-sal="slide-up" data-sal-delay="0" data-sal-duration="200" data-sal-easing="linear">Design</h3>
                <p className={styles.textDescriptions}data-sal="slide-up" data-sal-delay="0" data-sal-duration="400"  data-sal-easing="linear"> Our design team have worked on numerous projects and are especially skilled at bringing user-centred interfaces
                to life.   
                </p>
            </div>
            
            <div className={styles.clear}></div>
        </div>
        </div>
        <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="300" data-sal-easing="linear">
            <div classname={styles.imageBar}>
                <div className={styles.imageDetails}>
                    <StaticImage src="../../images/christopher-gower-m_HRfLhgABo-unsplash (1)_ccexpress.jpeg" 
                    alt="sketch of app concepts"
                    loading= "eager"
                    className={styles.image1}
                    />
                </div>
                <div className={styles.container}>
                    <h3 className={styles.textTitles} data-sal="slide-up" data-sal-delay="0" data-sal-duration="200" data-sal-easing="linear">Develop</h3>
                    <p className={styles.textDescriptions} data-sal="slide-up" data-sal-delay="0" data-sal-duration="400" data-sal-easing="linear"> Development is where the rubber hits the road. That's why our qualified in-house technology team is
                    on-hand to guide you through the challenges associated and produce the right solution for your business needs.
                    </p>
                </div>
                <div className={styles.clear}></div>
            </div> 
        </div>    
        <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="300" data-sal-easing="linear">
            <div classname={styles.imageBars}>
                <div className={styles.imageDetails2}>
                    <StaticImage src="../../images/myriam-jessier-eveI7MOcSmw-unsplash_ccexpress (1).jpeg" 
                    alt="sketch of app concepts"
                    className={styles.image2}
                    />
                </div>
                <div className={styles.containerTwo}>
                    <h3 className={styles.textTitles} data-sal="slide-up" data-sal-delay="0" data-sal-duration="200" data-sal-easing="linear">Deploy</h3>
                    <p className={styles.textDescriptions} data-sal="slide-up" data-sal-delay="0" data-sal-duration="400" data-sal-easing="linear"> We understand your digital product journey doesn't end at launch. Hence, our team can help support
                    your product for long after launch to bring it the success it deserves.
                    </p>
            </div>
            <div className={styles.clear}></div>
        </div>
        </div>

    </div>
        
    )
}
/*export function reveal(){
    var reveals= document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
      }
      
}

window.addEventListener("scroll", reveal);
*/
export default About