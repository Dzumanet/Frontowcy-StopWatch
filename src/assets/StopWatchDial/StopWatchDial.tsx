import {TimeConverter} from "../utils/TimeConverter.ts";

import './StopWatchDial.css';


type StopWatchDial = {
    time: number;
    description: string;
}

export const StopWatchDial = ({time, description}: StopWatchDial) => {


    return (
        <div className="stopwatch-dial">
            <div className="stopwatch-dial-description">{description}</div>
            <div className="stopwatch-time">{TimeConverter(time)}</div>
        </div>
    )

}