import MyFirstContext from './MyFirstContext';
import {useState} from 'react';

export default function (props) {
    const [state, setstate] = useState('black');
    return (
        <MyFirstContext.Provider value = {{contextData:state, updater: setstate}} >
            {props.children}
        </MyFirstContext.Provider>
    );
}