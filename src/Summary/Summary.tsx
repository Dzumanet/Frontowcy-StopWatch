import {TimeConverter} from "../utils/TimeConverter.ts";

import './Summary.css';


type SingleLap = {
    lapCount: number;
    lapTime: number;
}

type SummaryProps = {
    lapsArray: SingleLap[];
    totalTime: number;
}


export const Summary = ({lapsArray, totalTime}: SummaryProps) => {

    const totalLaps = lapsArray.length;


    const averageLapTime = totalLaps > 0 ? Math.round(totalTime / totalLaps) : 0;

    const fastestLap = totalLaps > 0 ? Math.min(...lapsArray.map(lap => lap.lapTime)) : 0;

    const slowestLap = totalLaps > 0 ? Math.max(...lapsArray.map(lap => lap.lapTime)) : 0;

    return (
        <div className="summary-table-wrapper">
        <table className="summary-table">
            <caption>Summary</caption>
            <tbody>
            <tr>
                <td>Łączny czas / Total time</td>
                <td>{TimeConverter(totalTime)}</td>
            </tr>
            <tr>
                <td>Łączna liczba okrążeń / Total number of laps</td>
                <td>{totalLaps}</td>
            </tr>
            <tr>
                <td>Średni czas okrążenie / Average lap time</td>
                <td>{TimeConverter(averageLapTime)}</td>
            </tr>
            <tr>
                <td>Najszybsze okrążenie / Fastest lap</td>
                <td>{TimeConverter(fastestLap)}</td>
            </tr>
            <tr>
                <td>Najwolniejsze okrążenie / Slowest lap</td>
                <td>{TimeConverter(slowestLap)}</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}