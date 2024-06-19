import {Button} from "../Button/Button.tsx";
import {useEffect, useState} from "react";
import {LapsTable} from "../LapsTable/LapsTable.tsx";
import {StopWatchDial} from "../StopWatchDial/StopWatchDial.tsx";
import {Summary} from "../Summary/Summary.tsx";

import './StopWatch.css'

type SingleLap = {
    lapCount: number;
    lapTime: number;
}

export const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    const [time, setTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [lapTimeArray, setLapTimeArray] = useState<SingleLap[]>([]);

    const addLapTime = (timeLap: number) => {
        const newLap: SingleLap = {
            lapCount: lapTimeArray.length + 1,
            lapTime: timeLap
        }
        setLapTimeArray(prevLapTimeArray => [...prevLapTimeArray, newLap]);
        setLapTime(0);

    }

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime(prevCounter => prevCounter + 1);
                setLapTime(prevCounter => prevCounter + 1);
            }, 10)
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        setIsStopped(false);
    }

    const stop = () => {
        setIsRunning(false);
        setIsStopped(true)
    }

    const reset = () => {
        setTime(0);
        setLapTime(0);
        setLapTimeArray([]);
        setIsStopped(false)
    }

    const addAndResetLap = () => {
        if (isRunning) {
            addLapTime(lapTime)
        }
    }


    return (
        <>
            {!isStopped ? (
                <>
                    <div className="stopwatch-wrapper">
                        <StopWatchDial time={time} description='Total Time'/>
                        <br/>
                        <StopWatchDial time={lapTime} description='Lap Time'/>
                    </div>
                    <LapsTable lapsArray={lapTimeArray}/>
                    <footer>
                        <Button onClick={start} label='start' color='green'/>
                        <Button onClick={stop} label='stop' color='red'/>
                        <Button onClick={reset} label='reset' color='red'/>
                        <Button onClick={addAndResetLap} label='lap' color='cadetblue'/>
                    </footer>
                </>
            ) : (
                <div className="summary">
                    <Summary lapsArray={lapTimeArray} totalTime={time}/>
                </div>
            )}
        </>
    )
}