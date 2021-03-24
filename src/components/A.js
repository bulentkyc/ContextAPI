import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import B from "./B";

export default function (props) {
    
    console.log('A is rendered');
    const context = useContext(MyFirstContext)
    return (
        <div>
            <button>A-{context.contextData}</button>
            <B color = {props.color}/>
        </div>
    );
}