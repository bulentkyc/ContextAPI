import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';

export default function () {
    const context = useContext(MyFirstContext);
    console.log(context)
    console.log('C is rendered');
    context.updater('Red');
    return (
        <button>C-{context.contextData}</button>
    );
}