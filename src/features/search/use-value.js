import {useDispatch, useSelector} from "react-redux";

export const useValue = (selector, action) => {
    const dispatch = useDispatch();
    const value = useSelector(selector);
    const handleChangeValue = (evt) => {
        dispatch(action(evt.target.value))
    };
    return [value, handleChangeValue];
}