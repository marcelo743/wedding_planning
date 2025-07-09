import styles from "@/styles/components/BfWords.module.scss";
import { faHeart }   from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BfWords = () => {
    return (
        <div className={styles.BfWords}>
            <p className={styles.Text}>A veces lo que empieza como una locura se convierte en lo mejor de tu vida (OREJAS)</p>
            <FontAwesomeIcon icon={faHeart} className={styles.Icon}/>
        </div>
    );
}

export default BfWords