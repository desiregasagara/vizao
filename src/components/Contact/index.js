import * as React from 'react';
import * as styles from './styles.module.scss';

const Contact = () =>{
    return(
        <div className={styles.background}>
            <div className={styles.title} id="contact">
                <h3>Contact Us:</h3>
                <p className={styles.description}>Let us know more about you and your project so 
                we can schedule a meeting with one of our experts.</p>
            </div>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className={styles.form}>
            <div>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="contact" value="contact" />
                <div className={styles.formGroup}>
                <label for="fname" required>
                    <p className={styles.text}>Name:</p>
                    <input type="text"name="name" id="name" className={styles.formControl} /> 
                    </label>
                </div>
                <div className={styles.space}>
                    <div className={styles.formGroup2}>
                    <label for="femail" >
                    <p className={styles.text}>Email:</p>
                        <input type="email"name="email" id="email"  className={styles.formControl} /> 
                    </label>
                    </div>
                    <div className={styles.formGroup2}>
                    <label for="fnumber" >
                    <p className={styles.text}>Phone Number:</p> 
                        <input type="number"name="number" id="number"  className={styles.formControl}  /> 
                    </label>
                    </div>
                </div>
                
                <div className={styles.formGroup}>
                <label for="ftext">
                    <p className={styles.text}>Explain your project here:</p>
                    <textarea
                        id="explanation"
                        name="explanation"
                        className={styles.inputText}
                    ></textarea>
                </label>
                </div>
                <button type="submit" id="submit" class="submit-button" className={styles.buttons}>
                    Submit
                </button>
    
            </div>
            </form>
        </div>
    )
}

export default Contact;