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
        <div className='laps-table-wrapper'>
            <table className="laps-table">
                <thead className='laps-table-header'>
                <tr>
                    <th className="lap-number">lap number</th>
                    <th>time</th>
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
        </div>
    )
}