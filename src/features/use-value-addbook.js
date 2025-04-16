import {useState} from "react";

function useValueAddbook( {id} ) {
    const [value, setValue] = useState('');
    const handleChange = (id) => {setValue(value)};
    return [value, handleChange]
}
export default useValueAddbook;