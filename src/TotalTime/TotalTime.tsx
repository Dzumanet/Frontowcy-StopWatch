import {TimeConverter} from "../utils/TimeConverter.ts";

type TotalTimeProps = {
    totalTime: number;
}

export const TotalTime = ({totalTime}: TotalTimeProps ) => {


    return <div>{TimeConverter(totalTime)}</div>


}