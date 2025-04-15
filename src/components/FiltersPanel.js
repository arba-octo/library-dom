import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {useValue} from "../features/search/use-value";
import {
    selectAge,
    selectAgeToFilter,
    selectTitle,
    selectAuthor,
    removeFilterAction,
    selectActiveFilters,
} from "../features/search/search-slice";

function FiltersPanel() {
    const dispatch = useDispatch();
    const activeFilters = useSelector(selectActiveFilters);
    const age = useSelector(selectAge);
    const ageToFilter = useSelector(selectAgeToFilter);
    const title = useSelector(selectTitle);
    const author = useSelector(selectAuthor);
    const filters = {
        ageFilter: {
            id: "age",
            name: "Возраст",
            value: age,
            valueToFilter: ageToFilter,
            type: "slider"
        },
        titleFilter: {
            id: "title",
            name: "Название",
            value: title,
            type: "input-text"
        },
        authorFilter: {
            id: "author",
            name: "Автор",
            value: author,
            type: "input-text"
        },
    };

    return (
        <div className="filters-panel">
            {activeFilters.map((filterItem) => {
                let currentFilter = {};
                if (filterItem.id === "ageToFilter") {currentFilter = filters.ageFilter}
                if (filterItem.id === "title") {currentFilter = filters.titleFilter}
                if (filterItem.id === "author") {currentFilter = filters.authorFilter}

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
            })}
        </div>
    )
}
export default FiltersPanel;