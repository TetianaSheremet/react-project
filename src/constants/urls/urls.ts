export const BaseUrl= 'https://api.themoviedb.org/3';


const TOKEN = import.meta.env.VITE_TOKEN as string;

export const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
};

