import * as React from 'react';
import * as styles from './styles.module.scss';

const Footer =  () => {
    
    const year= new Date().getFullYear();

    return(
        <div className={styles.container}>
            <p>&#169; {year} Vizao. Vizao is a software development company based in England and Wales.<br></br> All rights reserved.</p>
        </div>
    )
} 

export default Footer;