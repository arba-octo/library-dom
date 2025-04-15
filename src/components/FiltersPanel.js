import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAge,
    selectAgeToFilter,
    selectTitle,
    selectAuthor,
    removeFilterAction,
    selectActiveFilters,
} from "../features/search/search-slice";
import {AGE_TO_FILTER, AGE, TITLE, AUTHOR} from "../data/constants";

function FiltersPanel() {
    const dispatch = useDispatch();
    const activeFilters = useSelector(selectActiveFilters);
    const age = useSelector(selectAge);
    const ageToFilter = useSelector(selectAgeToFilter);
    const title = useSelector(selectTitle);
    const author = useSelector(selectAuthor);
    const filters = {
        ageFilter: {
            id: AGE,
            idToFilter: AGE_TO_FILTER,
            name: "Возраст",
            value: age,
            valueToFilter: ageToFilter,
            type: "slider"
        },
        titleFilter: {
            id: TITLE,
            name: "Название",
            value: title,
            type: "input-text"
        },
        authorFilter: {
            id: AUTHOR,
            name: "Автор",
            value: author,
            type: "input-text"
        },
    };

    return (
        <div className="filters-panel">
            {activeFilters.map((filterItem) => {
                let currentFilter = {};
                if (filterItem.id === AGE_TO_FILTER) {currentFilter = filters.ageFilter}
                if (filterItem.id === TITLE) {currentFilter = filters.titleFilter}
                if (filterItem.id === AUTHOR) {currentFilter = filters.authorFilter}
                console.log('currentFilter (перед отрисовкой Filter) = ', currentFilter)

                if (currentFilter.type === "slider") {
                    return (
                    <Filter
                        key={currentFilter.idToFilter}
                        id={currentFilter.idToFilter}
                        filterName={currentFilter.name}
                        filterValue={currentFilter.value}
                        filterSliderValue={currentFilter.valueToFilter}
                        onClick={() => dispatch(removeFilterAction(currentFilter.idToFilter))}
                        filterType={currentFilter.type}
                    />
                )} else {
                    return (
                        <Filter
                            key={currentFilter.id}
                            id={currentFilter.id}
                            filterName={currentFilter.name}
                            filterValue={currentFilter.value}
                            filterSliderValue={currentFilter.valueToFilter}
                            onClick={() => dispatch(removeFilterAction(currentFilter.id))}
                            filterType={currentFilter.type}
                        />
                    )
                }
            })}
        </div>
    )
}
export default FiltersPanel;