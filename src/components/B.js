import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';
import C from "./C";
import Provider from '../Provider';
export default function (props) {
    const context = useContext(MyFirstContext);
    console.log('B is rendered', context);
    return (
        <Provider>
        <div>
            <button>B-{context.contextData}</button>
            <C color = 'red'/>
        </div>
        </Provider>
    );
}