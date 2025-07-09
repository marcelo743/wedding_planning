import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown }   from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/Banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.Banner}>
            <h1 className={styles.Title}>Nos casamos</h1>
            <div>
                <span className={styles.Names}>Katherine</span>    
                <span className={styles.Names}>Y</span>    
                <span className={styles.Names}>Marcelo</span>
                <span className={styles.Title}>15 de noviembre 2025</span>
            </div>
            <div>
                <span className={styles.IconWrap}>
                    <FontAwesomeIcon icon={faAnglesDown} className={styles.Icon}/>
                </span>
                <span className={styles.Scroll}>Desliza</span>
            </div>
        </div>
    );
}

export default Banner