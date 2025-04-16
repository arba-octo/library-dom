
function Filter(props) {
    return (
        <div
            className="clear filter-panel__filter"
            id={props.id}
            onClick={props.onClick}
        >
            {props.filterName}:
            &ensp;
            {props.filterType === "slider" && (
                <span>{props.filterSliderValue[0]} - {props.filterSliderValue[1]}</span>
            )}
            {props.filterType === "input-text" && (
                <span>{props.filterValue}</span>
            )}
        </div>
    )
}
export default Filter;