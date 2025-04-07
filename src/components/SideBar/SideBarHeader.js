

function SideBarHeader(props) {
    return (
        <div className={props.mainCl}>
            <img src={props.src} alt="Иконка к тексту"/>
            <p>{props.name}</p>
        </div>
    )
}

export default SideBarHeader;