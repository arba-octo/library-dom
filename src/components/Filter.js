
function Filter(props) {
    return (
        <div className="clear filter-panel__filter" key={props.id} onChange={props.onChange}>
            { props.filterName }:
            { props.id === "age" ? ' ' + props.filterValue[0] + ' - ' + props.filterValue[1] : props.filterValue }
        </div>
    )
}
export default Filter;