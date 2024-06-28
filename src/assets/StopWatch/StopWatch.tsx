import {Button} from "../Button/Button.tsx";
import {useEffect, useState} from "react";
import {Summary} from "../Summary/Summary.tsx";
import {StopWatchDial} from "../StopWatchDial/StopWatchDial.tsx";
import {LapsTable} from "../LapsTable/LapsTable.tsx";

import './StopWatch.css'

type SingleLap = {
    lapCount: number;
    lapTime: number;
}

export const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [lapTimeArray, setLapTimeArray] = useState<SingleLap[]>([]);
    const [showTableButton, setShowTableButton] = useState(false);
    const [fastestLap, setFastestLap] = useState(0);

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
                setTotalTime(prevCounter => prevCounter + 1);
                setLapTime(prevCounter => prevCounter + 1);
            }, 10)
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    useEffect(() => {

        const fastestLap = lapTimeArray.length > 0 ? Math.min(...lapTimeArray.map(lap => lap.lapTime)) : 0;
        setFastestLap(fastestLap)

    }, [lapTimeArray]);

    const start = () => {
        setIsRunning(true);
        setIsStopped(false);
        setShowTableButton(false);
    }

    const stop = () => {
        setIsRunning(false);
        setShowTableButton(true);
    }

    const reset = () => {
        setTotalTime(0);
        setLapTime(0);
        setLapTimeArray([]);
        setIsStopped(false);
    }

    const addLap = () => {
        if (isRunning) {
            addLapTime(lapTime);
        }
    }

    const showTable = () => {
        setShowTableButton(true);
        setIsStopped(true)
    }


    return (
        <div className='stopwatch-container'>
            {!isStopped ? (
                <>
                    <main className='stopwatch-wrapper'>
                        <StopWatchDial totalTime={totalTime} lapTime={lapTime} lapNumber={lapTimeArray.length}
                                       fastestLap={fastestLap}/>
                        <section className="btn-left">
                            <Button onClick={start} label='start' color='green'/>
                            {!showTableButton ? (
                                <Button onClick={stop} label='stop' color='red'/>
                            ) : (
                                <Button onClick={showTable} label='summary' color='green'/>
                            )}


                        </section>
                        <section className="btn-right">
                            <Button onClick={reset} label='reset' color='red'/>
                            <Button onClick={addLap} label='lap' color='cadetblue'/>
                        </section>
                    </main>
                    <LapsTable lapsArray={lapTimeArray}/>
                </>
            ) : (
                <div className="summary">
                    <Summary lapsArray={lapTimeArray} totalTime={totalTime}/>
                    <Button label='close' onClick={() => setIsStopped(false)}/>
                </div>
            )}
        </div>
    )
}
