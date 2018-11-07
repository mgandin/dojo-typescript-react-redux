import React, {SFC} from "react";

interface Props {
    name: string;
    onChange: (name: string) => void;
}

export const InputComponent: SFC<Props> = ({ name, onChange }) => (
    <div>
        <input type="text" value={name} onChange={e => onChange(e.target.value)}/>
        <span>{name}</span>
    </div>
);