import * as React from 'react';
import * as styles from './styles.module.scss';

const Contact = () =>{
    return(
        <div className={styles.background}>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
            </head>
            <div className={styles.title} id="contact">
                <h3 className={styles.textTitles} data-sal="slide-up" data-sal-delay= "100" data-sal-easing="linear">Contact Us:</h3>
                <p className={styles.description} data-sal="slide-up" data-sal-delay= "300" data-sal-easing="linear">Let us know more about you and your project so 
                we can schedule a meeting with one of our experts.</p>
            </div>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className={styles.form} onSubmit="process(event)">
            <div>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.formGroup} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                <label for="fname" required>
                    <p className={styles.text}>Name*</p>
                    <input type="text"name="name" id="name" className={styles.formControl} required /> 
                    </label>
                </div>
                <div className={styles.space}>
                    <div className={styles.formGroup2} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                    <label for="femail" >
                    <p className={styles.text}>Email*</p>
                        <input type="email"name="email" id="email"  className={styles.formControl} required /> 
                    </label>
                    </div>
                    <div className={styles.formGroup2} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                    <label for="fnumber" >
                    <p className={styles.text}>Phone Number</p> 
                        <input type="tel"name="phone" id="phone"  className={styles.formControl}  /> 
                    </label>
                    </div>
                </div>
                
                <div className={styles.formGroup} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                <label for="ftext">
                    <p className={styles.text}>Explain your project here:</p>
                    <textarea
                        id="explanation"
                        name="explanation"
                        className={styles.inputText}
                    ></textarea>
                </label>
                </div>
                <div className={styles.bdiv} data-sal="slide-up" data-sal-delay= "200" data-sal-easing="linear">
                    <button type="submit" id="submit" className={styles.buttons}>
                        Submit
                    </button>
                </div>
    
            </div>
            </form>
            
      
            
        </div>
    )
}

export default Contact;