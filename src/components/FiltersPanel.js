import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {useValue} from "../features/search/use-value";
import {
    selectAge, setAgeAction,
    selectTitle, setTitleAction,
    selectAuthor, setAuthorAction,
    removeFilterAction,
    clearAllFiltersAction,
    setActiveFilter,
    selectActiveFilters,
} from "../features/search/search-slice";

function FiltersPanel() {
    // console.log('Зашли в FiltersPanel');
    const dispatch = useDispatch();
    const activeFilters = useSelector(selectActiveFilters);
    // console.log('activeFilters в FiltersPanel  = ', activeFilters);
    const age = useSelector(selectAge);
    const title = useSelector(selectTitle);
    const author = useSelector(selectAuthor);
    const filters = {
        ageFilter: {
            id: "age",
            name: "Возраст",
            value: {age},
            type: "slider"
        },
        titleFilter: {
            id: "title",
            name: "Название",
            value: {title},
            type: "input-text"
        },
        authorFilter: {
            id: "author",
            name: "Автор",
            value: {author},
            type: "input-text"
        },
    };

    console.log('activeFilters', activeFilters)
    console.log('filters.ageFilter.value = ', filters.ageFilter.value)
    return (
        <div className="filters-panel">
            {activeFilters.map((filterItem) => {
                let currentFilter = {};
                if (filterItem.id === "age") {currentFilter = filters.ageFilter}
                if (filterItem.id === "title") {currentFilter = filters.titleFilter}
                if (filterItem.id === "author") {currentFilter = filters.authorFilter}

                return (
                    <Filter
                        key={currentFilter.id}
                        id={currentFilter.id}
                        filterName={currentFilter.name}
                        filterValue={currentFilter.value}
                        onClick={() => dispatch(removeFilterAction(currentFilter.id))}
                        filterType={currentFilter.type}
                    />
                )
            })}
        </div>
    )
}
export default FiltersPanel;