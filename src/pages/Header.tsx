import {useEffect, useState} from "react";
import type {IGenre} from "../models/IGenre.ts";
import {getGenres} from "../services/api.service.ts";

const Header = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        getGenres().then(data => setGenres(data.genres));
    }, []);

    return (
        <div>
            {genres.map(value => (
                <div key={value.id}>{value.name}</div>
            ))}
        </div>
    );
};

export default Header;
