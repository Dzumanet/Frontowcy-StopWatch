import {TimeConverter} from "../utils/TimeConverter.ts";

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
        <table className="summary">
            <caption>Summary</caption>
            <tbody>
            <tr>
                <td>Lączny czas / Total time</td>
                <td>{TimeConverter(totalTime)}</td>
            </tr>
            <tr>
                <td>Łączna liczba okrążeń / Total number of laps</td>
                <td>{totalLaps}</td>
            </tr>
            <tr>
                <td>Sredni czas okrązenie / Average lap time</td>
                <td>{TimeConverter(averageLapTime)}</td>
            </tr>
            <tr>
                <td>Najszybsze okrązenie / Fastest lap</td>
                <td>{TimeConverter(fastestLap)}</td>
            </tr>
            <tr>
                <td>najwolniejsze okrązenie / slowest lap</td>
                <td>{TimeConverter(slowestLap)}</td>
            </tr>
            </tbody>
        </table>
    )
}