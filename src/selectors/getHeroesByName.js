import { heroes } from "../data/Heroes";

export const getHeroesByName = ( name = "" ) => {
    console.log('jhann');
    name = name.toLocaleLowerCase();
    const search = heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
    return name === "" ? [] : search
};
