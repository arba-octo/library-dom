
function Filter(props) {
    console.log('props (зашли в Filter) = ', props);
    return (
        <div
            className="clear filter-panel__filter"
            key={props.key}
            id={props.id}
            onClick={props.onClick}
        >
            {props.filterName}:
            &ensp;
            {props.filterType === "slider" && (
                <span>{props.filterValue.id[0]} - {props.filterValue.id[1]}</span>
            )}
            {props.filterType === "input-text" && (
                <span>{props.filterValue}</span>
            )}
        </div>
    )
}
export default Filter;