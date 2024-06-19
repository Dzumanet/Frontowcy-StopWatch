import {MouseEventHandler} from "react";

import './Button.css';

type btnProps = {
    label: string;
    color?: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({label, color, onClick}: btnProps) => {

    return <button onClick={onClick} className="button" style={{backgroundColor: color}}>{label}</button>;
}