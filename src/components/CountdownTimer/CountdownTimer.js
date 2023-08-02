import { useCountdown } from '../../hooks/useCountdown';
import './CountdownTimer.css'

export const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)
    console.log(days, hours, minutes, seconds)
    return <div className='timer'>
        <div>
            <p className='count'>{days}</p>
            <p>DAYS</p>
        </div>
        <div>
            <p className='count'>{hours}</p>
            <p>HOURS</p>
        </div>
        <div>
            <p className='count'>{minutes}</p>
            <p>MINUTES</p>
        </div>
        <div>
            <p className='count'>{seconds}</p>
            <p>SECONDS</p>
        </div>
    </div>
}