import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';

export default function (props) {
    console.log('Child-1 is rendered');
    const context = useContext(MyFirstContext)
    return (
        <button>Child1-{context.contextData}-{props.color}</button>
    );
}