function SideBarInput(props) {

    return (
        <div className="side-bar__input-wrapper">
            { props.label && <label htmlFor={props.id} className="side-bar__label">{props.label}</label> }
            <input
                id={props.id}
                className={`side-bar__input ${props.classInput}`}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>

    )
}
export default SideBarInput;