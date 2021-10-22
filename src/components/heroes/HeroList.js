import React, { useMemo } from 'react'
import { getHeroesByPubisher } from '../selectors/getHeroesByPublisher';
import HeroeCard from './HeroeCard';
import './heroList.css';

const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPubisher(publisher), [publisher]);

    return (
        <div className='container-flex animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroeCard 
                        key={hero.id}
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}

export default HeroList;
