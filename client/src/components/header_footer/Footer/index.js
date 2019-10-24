import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import classes from '../../../Resources/css/styles.module.css';

const Footer = () => {
    
    return (
        <footer className={classes.bck_b_dark}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    Waves
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.left}>
                        <h2>Contact information</h2>
                        <div className={classes.business_nfo}>
                            <div className={classes.tag}>
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className={classes.icon}
                                />
                                <div className={classes.nfo}>
                                    <div>Address</div>
                                    <div>Kramer 2345</div>
                                </div>
                            </div>
                            <div className={classes.tag}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className={classes.icon}
                                />
                                <div className={classes.nfo}>
                                    <div>Phone</div>
                                    <div>2345-22222</div>
                                </div>
                            </div>
                            <div className={classes.tag}>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className={classes.icon}
                                />
                                <div className={classes.nfo}>
                                    <div>Working hours</div>
                                    <div>Mon-Sun/ 9am-8pm</div>
                                </div>
                            </div>
                            <div className={classes.tag}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className={classes.icon}
                                />
                                <div className={classes.nfo}>
                                    <div>Email</div>
                                    <div>nfo@waves.com</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={classes.left}>
                        <h2>Be the first to know</h2>
                        <div>
                            <div>
                            Get all the latest information on events, sales and offers.You can miss out.
                            </div>
                        </div>
                    </div>      
                </div>
            </div>

        </footer>
    );
};

export default Footer;