import { heroes } from "../../data/heroes";


export const getHeroesByPubisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)) throw new Error(`Publisher "${publisher}" it's incorrect`);

    return heroes.filter(hero => hero.publisher === publisher);

};