import MyFirstContext from '../MyFirstContext';
import {useContext,useState} from 'react';
import C from "./C";
import Provider from '../Provider';
export default function (props) {
    const [state, setstate] = useState('black')
    const context = useContext(MyFirstContext);
    console.log('B is rendered', context);
    return (
        <Provider>
        <div>
            <button>B-{context.contextData}-{props.color}</button>
            <C color = {{state,setstate}}/>
        </div>
        </Provider>
    );
}