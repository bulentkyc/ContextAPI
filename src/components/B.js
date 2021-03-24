import MyFirstContext from '../MyFirstContext';
import C from "./C";

export default function () {
    return (
        <MyFirstContext.Provider value = "Please Click">
            <C/>
        </MyFirstContext.Provider>
    );
}