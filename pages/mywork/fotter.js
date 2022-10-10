import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faYoutube, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/fotter.module.css'

export const Fotter = () => {
    return (
        <>
            <div className={styles.Fotter}>
                <div className={styles.fotp}>
                    Follow Us For More
                </div>
                <div className={styles.FotterC}>
                    <div className={styles.icon1}>
                        <a href="https://www.google.com/" target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faGoogle}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon2}>
                        <a href="https://www.youtube.com/" target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faYoutube}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon3}>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faLinkedin}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                    <div className={styles.icon4}>
                        <a href="https://github.com/" target="_blank">
                            <FontAwesomeIcon className={styles.FontAwesomeIcon}
                                icon={faGithub}
                                // style={{ fontSize: 55, color: "white" }}
                            />
                        </a>
                    </div>
                </div>
                     <hr></hr>
                <div className={styles.FotterB}>
                    © 2022 Copyright: 
                    <a class="text-white" href="https://Today'sNews.com/"> Today'sNews.com  </a>
                    All Rights Reserved
                </div>
            </div>
        </>
    )
}

// export default Fotter