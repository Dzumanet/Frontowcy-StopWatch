import {TimeConverter} from "../utils/TimeConverter.ts";

type LapTimeProps = {
    lapTime: number;
}

export const LapTime = ({lapTime}: LapTimeProps) => {


    return <div>{TimeConverter(lapTime)}</div>


}