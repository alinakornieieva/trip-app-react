import { useEffect, useCallback, useState, memo } from "react"
import './Timer.css'

const getDays = (time) => Math.floor(time / (1000 * 60 * 60 * 24))
const getHours = (time) => Math.floor((time / (1000 * 60 * 60)) % 24)
const getMinutes = (time) => Math.floor((time / 1000 / 60) % 60)
const getSeconds = (time) => Math.floor((time / 1000) % 60)

const Timer = ({ deadline }) => {
    const [time, setTime] = useState([0, 0, 0, 0])
    const leading0 = (num) => {
        return num < 10 ? "0" + num : num
    }
    const getTimeUntil = useCallback((deadline) => {
        const time = new Date(deadline).getTime() - new Date().getTime()
        if (time < 0) {
            setTime([
                leading0(getDays(0)),
                leading0(getHours(0)),
                leading0(getMinutes(0)),
                leading0(getSeconds(0))
            ])
        } else {
            setTime([
                leading0(getDays(time)),
                leading0(getHours(time)),
                leading0(getMinutes(time)),
                leading0(getSeconds(time))
            ])
        }
    }, [])
    useEffect(() => {
        const timerRef = setInterval(() => getTimeUntil(deadline), 1000)
        return () => {
            clearInterval(timerRef)
            getTimeUntil(deadline)
        }
    }, [deadline, getTimeUntil])
    return <div className='timer'>
        {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((value, i) => <div key={value}>
            <p className='count'>{time[i]}</p>
            <p>{value}</p>
        </div>)}
    </div>
}

export default memo(Timer)