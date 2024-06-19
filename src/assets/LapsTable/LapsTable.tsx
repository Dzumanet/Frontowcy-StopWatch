import {TimeConverter} from "../utils/TimeConverter.ts";

import './LapsTable.css';

type SingleLap = {
    lapCount: number;
    lapTime: number;
}

type LapsRecordProps = {
    lapsArray: SingleLap[];
}

export const LapsTable = ({lapsArray}: LapsRecordProps) => {

    return (
        <>
            <table className="laps-table">
                <caption>Lap time table</caption>
                <thead>
                <tr>
                    <th className="lap-number">Lap number</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {lapsArray.map((record) => (
                    <tr key={record.lapCount}>
                        <td>{record.lapCount}</td>
                        <td>{TimeConverter(record.lapTime)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}