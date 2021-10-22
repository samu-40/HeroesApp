import React, { useMemo } from 'react';
import HeroeCard from '../heroes/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { parse } from "query-string";
import { getHeroeByName } from '../selectors/getHeroeByName';

import './search_screen.css';

const SearchScreen = ({ history }) => {

    const location = useLocation();
    
    const {q = ''} = parse(location.search);


    const [formValue, hadleInputChange] = useForm({textSearch: q});
    
    const {textSearch} = formValue;


    const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${textSearch}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className='container-search-screen'>
                <div className='container-search'>
                    <form 
                        onSubmit={handleSearch}
                        className='search'
                    >
                        <input
                            type='text'
                            placeholder='Find your heroe'
                            onChange={hadleInputChange}
                            name='textSearch'
                            value={textSearch}
                            autoComplete='off'
                        />

                        <button
                            type='submit'
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className='results'>
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '') &&
                            <div>Search a heroe</div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                            <div id='error'>
                                {`Hero ${q} not found`}
                            </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
