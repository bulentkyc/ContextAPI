import MyFirstContext from '../MyFirstContext';
import {useContext} from 'react';

export default function () {
    const context = useContext(MyFirstContext)
    return (
        <button>C-{context}</button>
    );
}