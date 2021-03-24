import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import B from "./B";

export default function () {
    const context = useContext(MyFirstContext)
    return (
        <div>
            <button>A-{context}</button>
            <B/>
        </div>
    );
}