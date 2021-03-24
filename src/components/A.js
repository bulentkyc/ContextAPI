import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import B from "./B";

export default function (props) {
    const context = useContext(MyFirstContext)
    console.log('A is rendered');
    return (
        <div>
            <button>A-{context.contextData}</button>
            <B color = {props.color}/>
        </div>
    );
}