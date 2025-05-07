import {useDispatch, useSelector} from "react-redux";

export const useValue = (selector, action) => {
    const dispatch = useDispatch();
    const value = useSelector(selector);
    const handleChangeValue = (evt) => {
        console.log(evt.target);
        dispatch(action({
            id: evt.target.id,
            value: evt.target.value
        }))
    };
    return [value, handleChangeValue];
}