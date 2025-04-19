import {dataBooks} from "../data/data-books";
import useValueAddbook from "./use-value-addbook";

function useMakeBook(book) {
    const [valueAuthor] = useValueAddbook();
    const [valueTitle] = useValueAddbook();
    const [valueAge] = useValueAddbook();
    const [valueCollection] = useValueAddbook();
    const [valuePages] = useValueAddbook();

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
}
export default useMakeBook;