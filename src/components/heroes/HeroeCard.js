import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import './heroeCard.css'

const HeroeCard = ({

    id,
    superhero,
    alter_ego,

}) => {

    const { default: def } = heroImages(`./${id}.jpg`);

    return (
        <div className='main-container-flex'>
            <div className='img'>
                <img className='picture' src={def} alt={superhero}/>
            </div>
            <div className='text'>
                <h3>{superhero}</h3>
                <p>{alter_ego}</p>
                <Link to={`./hero/${id}`}>
                    More...
                </Link>
            </div>
        </div>
    )

};

export default HeroeCard;
