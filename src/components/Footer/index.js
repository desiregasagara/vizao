import * as React from 'react';
import * as styles from './styles.module.scss';

const Footer =  () => {
    
    const year= new Date().getFullYear();

    return(
        <div className={styles.container}>
            <p>&#169; Copyright- {year}. All rights reserved.</p>
        </div>
    )
} 

export default Footer;