import './StopWatchDial.css';
import {TotalTime} from "../TotalTime/TotalTime.tsx";
import {LapTime} from "../LapTime/LapTime.tsx";
import {TimeConverter} from "../utils/TimeConverter.ts";


type StopWatchDialProps = {
    totalTime: number;
    lapTime: number;
    lapNumber: number;
    fastestLap: number;
}

export const StopWatchDial = ({totalTime, lapTime, lapNumber, fastestLap}: StopWatchDialProps) => {

    return (
        <div className="stopwatch-dial-wrapper">
            <div className="stopwatch-dial">
                <div className="stopwatch-time">
                    <p>total time</p>
                    <TotalTime totalTime={totalTime ? totalTime : 0} />
                    <span>fastest lap: {TimeConverter(fastestLap)} </span>
                </div>
                <div className="stopwatch-lap-time">
                    <p>lap time</p>
                    <LapTime lapTime={lapTime ? lapTime : 0} />
                    <span>current lap: {lapNumber + 1}</span>
                </div>
            </div>
           </div>
    )

}