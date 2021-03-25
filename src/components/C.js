import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';

export default function (props) {
    const context = useContext(MyFirstContext);
    console.log(context)
    console.log('C is rendered');
    context.updater('Red');
    props.color.setstate('red');
    return (
        <button>C-{context.contextData}-{props.color.state}</button>
    );
}