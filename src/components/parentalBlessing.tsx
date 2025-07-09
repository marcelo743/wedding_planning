import styles from "@/styles/components/ParentalBlessing.module.scss";


const ParentalBlessing = () => {
    return (
        <div className={styles.ParentalBlessing}>
            <div className={`${styles.Wrap} d-flex flex-column align-items-center justify-content-center`}>
                <span className={`${styles.Text} mb-5`}>
                    Con la bendición de Dios y en compañía de nuestros padres
                </span>

                <span className={styles.Text}>
                    Madre de la novia
                </span>

                <span className={`${styles.ParentName} mb-5`}>
                    Sra. Ivania del Socorro Latino Obando
                </span> 

                <span className={styles.Text}>
                    Padres del novio
                </span>

                <span className={`${styles.ParentName} mb-2`}>Sr. Joaquin Saavedra Salazar</span>
                <span className={`${styles.ParentName} mb-5`}>Sra. Marcela Auxiliadora Saavedra</span>

                <span className={styles.Text}>
                    Nos complace invitarte a ser parte de este gran día.
                </span>
            </div>
        </div>
    );
}

export default ParentalBlessing;