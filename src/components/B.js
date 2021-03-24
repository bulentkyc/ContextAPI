import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import C from "./C";

export default function () {
    const context = useContext(MyFirstContext);
    return (
        <div>
            <button>B-{context}</button>
            <C/>
        </div>
    );
}