import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {useValue} from "../features/search/use-value";
import {
    selectAge, setAgeAction,
    selectTitle, setTitleAction,
    selectAuthor, setAuthorAction,
    removeFilterAction,
    clearAllFiltersAction,
    selectActiveFilters
} from "../features/search/search-slice";

function FiltersPanel() {
    console.log('Зашли в FiltersPanel');
    const dispatch = useDispatch();
    const activeFilters = useSelector(selectActiveFilters);
    console.log('activeFilters в FiltersPanel  = ', activeFilters);
    const [age, handleBlurAge] = useValue(selectAge, setAgeAction);
    const [title, handleBlurTitle] = useValue(selectTitle, setTitleAction);
    const [author, handleBlurAuthor] = useValue(selectAuthor, setAuthorAction);
    const filters = {
        ageFilter: {
            id: "age",
            name: "Возраст",
            handleBlur: {handleBlurAge},
            value: {age},
            type: "slider"
        },
        titleFilter: {
            id: "title",
            name: "Название",
            handleBlur: {handleBlurTitle},
            value: {title},
            type: "input-text"
        },
        authorFilter: {
            id: "author",
            name: "Автор",
            handleBlur: {handleBlurAuthor},
            value: {author},
            type: "input-text"
        },
    };

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
                        onBlur={currentFilter.handleBlur}
                        onClick={dispatch(removeFilterAction(currentFilter))}
                        filterName={currentFilter.name}
                        filterValue={currentFilter.value}
                    />
                )
            })}
        </div>
    )
}
export default FiltersPanel;