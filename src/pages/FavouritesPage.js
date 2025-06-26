import Header from "../components/Header/Header";
import {useSelector} from "react-redux";
import {selectFavourites} from "../features/favourites/favourites-slice";
import Favourite from "../components/Favourite";
import { Button } from "@mui/material";

function FavouritesPage() {
    const favourites = useSelector(selectFavourites); // получили массив с книгами из избранного (имеет поля title, author и все другие поля из БД)
    console.log('favourites (выгрузка в FavouritesPage) = ', favourites);

    return (
        <div className="section">
            <Header />
            <div className="favour-content">
                <h2>Избранное</h2>
                <div className="favour-container">
                    {favourites.map(favourItem => (
                        <Favourite book={favourItem} key={favourItem.id} />
                    ))}
                </div>
                <Button variant="text">Читать все книги из избранного ()</Button>
            </div>
        </div>
    )
}
export default FavouritesPage;