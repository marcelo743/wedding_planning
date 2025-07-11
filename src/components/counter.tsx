import useCountdowm from "@/hooks/useCountdowm";
import styles from "@/styles/components/Counter.module.scss";


interface CounterProps {
    targetDate: string;
}

const Counter = ({ targetDate }: CounterProps) => {
    const  { days, hours, minutes, seconds } = useCountdowm(targetDate);

    return (
        <div className={`${styles.Countdown} d-flex flex-column align-items-center`}>
            <span className={`${styles.Title} mb-4`}>Faltan</span>
            
            <div className={`${styles.TimerWrap} mb-4`}>
                <div className={`${styles.Timer}`}>
                    <span className={`${styles.Time}`}>{days}</span>
                    <span>Dias</span>
                </div>
                <div className={`${styles.Timer}`}>
                    <span className={`${styles.Time}`}>{hours}</span>
                    <span>Hrs</span>
                </div>
                <div className={`${styles.Timer}`}>
                    <span className={`${styles.Time}`}>{minutes}</span>
                    <span>Min</span>
                </div>
                <div className={`${styles.Timer}`}>
                    <span className={`${styles.Time}`}>{seconds}</span>
                    <span>Seg</span>
                </div>
            </div>
            <span className={styles.Title}>para nuestra boda</span>
        </div>
    );
}

export default Counter;