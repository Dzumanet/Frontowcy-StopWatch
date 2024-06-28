import {MouseEventHandler} from "react";

import './Button.css';

type btnProps = {
    label: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({label, color, onClick}: btnProps) => {

    return <button onClick={onClick} style={{backgroundColor: color}}>{label}</button>;
}