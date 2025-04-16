import {useState} from "react";
import {Slider, Typography} from "@mui/material";
import SideBarInput from "./SideBarInput";
import useValueAddbook from "../../features/use-value-addbook";
import {dataBooks} from "../../data/data-books";

function SideBarAddBook() {
    const marks = [
        {
            value: 6,
            label: '6 лет'
        },
        {
            value: 12,
            label: '12 лет'
        }
    ];
    const [valueAuthor, handleChangeAuthor] = useValueAddbook("add-book__author");
    const [valueTitle, handleChangeTitle] = useValueAddbook("add-book__title");
    const [valueAge, handleChangeAge] = useValueAddbook("add-book__age");
    const [valueCollection, handleChangeCollection] = useValueAddbook("add-book__collection");
    const [valuePages, handleChangePages] = useValueAddbook("add-book__pages");

    const handleClickAddBook = () => {
        const newBook = {
            title: valueTitle,
            author: valueAuthor,
            collection: valueCollection,
            pages: valuePages,
            age: valueAge,
            altText: "Изображение",
            faceImg: '',
            tocImg: '',
            exampImg: '',
            statusFree: true,
            occupiedTo: null,
            owner: 'DanaArb',
            firstSelfReading: false,
            comments: []
        }
        dataBooks.concat(newBook);
    }
    const [check, setCheck] = useState('')
    const handleChangeRadio = () => {

    }

    return (
        <form className="side-bar__inputs side-bar__add-book-form" action="mailto:nevarus@yandex.ru" method="POST">

            <SideBarInput
                id="add-book__author"
                type="text"
                placeholder="Автор"
                classInput="side-bar__input_add-book"
                value={valueAuthor}
                onChange={handleChangeAuthor}
            />
            <SideBarInput
                id="add-book__title"
                type="text"
                placeholder="Название"
                classInput="side-bar__input_add-book"
                value={valueTitle}
                onChange={handleChangeTitle}
            />
            <div className="side-bar__slider">
                <Typography id="age" gutterBottom>
                    Возраст читателя
                </Typography>
                <Slider
                    aria-labelledby="age"
                    getAriaLabel={() => 'Возраст читателя'}
                    value={valueAge}
                    onChange={handleChangeAge}
                    step={1}
                    min={0}
                    max={18}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </div>
            <SideBarInput
                id="add-book__collection"
                type="text"
                placeholder="Коллекция (например: Роболты)"
                classInput="side-bar__input_add-book"
                value={valueCollection}
                onChange={handleChangeCollection}
            />
            <SideBarInput
                id="add-book__pages"
                type="number"
                placeholder="Количество страниц (например: 129)"
                classInput="side-bar__input_add-book"
                value={valuePages}
                onChange={handleChangePages}
            />
            <label htmlFor="add-book__face-img">Добавьте изображение (фото) обложки, сделанной на белом фоне:</label>
            <SideBarInput
                id="add-book__face-img"
                name="add-book__face-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book"
            />
            <label htmlFor="add-book__toc-img">Добавьте изображение (фото) оглавления, если имеется:</label>
            <SideBarInput
                id="add-book__toc-img"
                name="add-book__toc-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book"
            />
            <label htmlFor="add-book__examp-img">Добавьте изображение (фото) типового разворота на белом фоне:</label>
            <SideBarInput
                id="add-book__examp-img"
                name="add-book__examp-img"
                type="file"
                accept="image/*"
                classInput="side-bar__input_add-book"
            />
            <div>
                <p>Подходит ли книга для первого самостоятельного чтения?</p>
                <input type="radio" id="yes" name="add-book__first-self-reading" value="да" onChange={handleChangeRadio}/>
                <label htmlFor="yes">Да</label>
                <input type="radio" id="no" name="add-book__first-self-reading" value="нет" checked onChange={handleChangeRadio}/>
                <label htmlFor="no">Нет</label>
            </div>

            <button
                type="submit"
                className="side-bar__add-button"
                onClick={handleClickAddBook}
            >Добавить книгу
            </button>
        </form>
    )
}

export default SideBarAddBook;