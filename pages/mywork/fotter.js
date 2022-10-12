import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";
import { faYoutube, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/fotter.module.css'

export const Fotter = () => {
    const text = ` Follow Us For More`;
    const text1 = ` © 2022 Copyright: `;
    const text2 = ` Today'sNews.com `;
    const text3 = ` All Rights Reserved`;
    return (
        <>
             
            <div className={styles.Fotter}>
                <div className={styles.fotp}>
                    {text}
                </div>
                <div className={styles.FotterC}>
                    <div className={styles.icon1}>
                        <a href="https://www.google.com/" rel="noreferrer"  target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faGoogle}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon2}>
                        <a href="https://www.youtube.com/" rel="noreferrer"  target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faYoutube}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon3}>
                        <a href="https://www.linkedin.com/" rel="noreferrer"  target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faLinkedin}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon4}>
                        <a href="https://github.com/" rel="noreferrer"  target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faGithub}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                </div>
                     <hr></hr>
                <div className={styles.FotterB}>
                    {text1}
                    <a className={styles.textwhite} href="https://Today'sNews.com/"> {text2} </a>
                    {text3}
                </div>
            </div>
        </>
    )
}

export default Fotter