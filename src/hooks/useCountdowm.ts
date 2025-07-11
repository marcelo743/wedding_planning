import { useEffect, useState } from "react";
import dayjs  from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";


dayjs.extend(duration);
dayjs.extend(utc);

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const useCountdowm = (targetDate: string): TimeLeft => {
    const [countdowm, setCountdowm] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculate = () : TimeLeft => {
        const now = dayjs();
        const target = dayjs(targetDate);

        if(target.isBefore(now)) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const diff = dayjs.duration(target.diff(now));

        return {
            days: Math.floor(diff.asDays()),
            hours: diff.hours(),
            minutes: diff.minutes(),
            seconds: diff.seconds(),
        };
    };
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdowm(calculate());
        })

        return () => clearInterval(interval);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetDate]);

    return countdowm;
};

export default useCountdowm;