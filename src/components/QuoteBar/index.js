import * as React from 'react';
import * as styles from  './styles.module.scss';

const QuoteBar = () =>{
    return(
        <div className={styles.background}>
            <div className={styles.text}>
                <q>They were a breath of fresh air as I didn't even feel the need to chase them for updates</q>
                <p > - Oluwanifewa O. | Forensic Data Analytics Associate</p>
            </div>
           
        </div>
    )

}

export default QuoteBar