import {useDispatch, useSelector} from "react-redux";

export const useText = (selector, action) => {
    const dispatch = useDispatch();
    const text = useSelector(selector);
    const handleChangeText = (evt) => {
        dispatch(action(evt.target.value))
    };
    return [text, handleChangeText];
}