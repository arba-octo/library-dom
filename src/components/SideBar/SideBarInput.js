function SideBarInput(props) {
    const rangeElement = document.querySelector('.range');
    const handleInput = (evt) => {
        evt.preventDefault();
        evt.target.parentNode.style.setProperty("--value", evt.target.value);
    };
    rangeElement.addEventListener('input', handleInput);

    return (
        <div>
            { props.label && <label htmlFor={props.id} className="side-bar__label">{props.label}</label> }
            <input
                id={props.id}
                className="side-bar__input"
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                on
            />
        </div>

    )
}
export default SideBarInput;