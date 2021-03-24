import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import C from "./C";
import Provider from '../Provider';

export default function (props) {
    console.log('B is rendered');
    const context = useContext(MyFirstContext);
    context.updater('');
    return (
        <Provider>
        <div>
            <button>B-{context.contextData}</button>
            <C color = 'red'/>
        </div>
        </Provider>
    );
}