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
        // Фильтр-слайдер для Side-Bar Search
        ageFilter: {
            id: AGE,
            name: "Возраст",
            value: age,
            type: "slider"
        },
        // Фильтр-слайдер для FilterPanel
        ageFilterToPanel: {
            id: AGE_TO_FILTER,
            name: "Возраст",
            value: ageToFilter,
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
                if (filterItem.id === AGE_TO_FILTER) {currentFilter = filters.ageFilterToPanel}
                if (filterItem.id === TITLE) {currentFilter = filters.titleFilter}
                if (filterItem.id === AUTHOR) {currentFilter = filters.authorFilter}

                if (currentFilter.type === "slider") {
                    return (
                    <Filter
                        key={filterItem.id}
                        id={filterItem.id}
                        filterName={currentFilter.name}
                        filterValue={filterItem.value}
                        onClick={() => dispatch(removeFilterAction(currentFilter))}
                        filterType={currentFilter.type}
                    />
                )} else {
                    return (
                        <Filter
                            key={filterItem.id}
                            id={filterItem.id}
                            filterName={currentFilter.name}
                            filterValue={filterItem.value}
                            onClick={() => dispatch(removeFilterAction(currentFilter))}
                            filterType={currentFilter.type}
                        />
                    )
                }
            })}
        </div>
    )
}
export default FiltersPanel;