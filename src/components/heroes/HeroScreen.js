import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { heroImages } from '../../helpers/heroImages';
import { getHeroeById } from '../selectors/getHeroeById';
import './heroScreen.css';

const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    
    const { default: def } = heroImages(`./${heroeId}.jpg`);

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if (!hero) return <Redirect to='/'/>;

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        superpower,
    } = hero;

    const handleBack = () => {
        if(history.length <= 2){
            history.push('/')
        } else {
            history.goBack();
        }
    };

    return (
        <div className='container-grid'>
            <div className='img'>
                <img 
                    // src={`../assets/heroes/${heroeId}.jpg`}
                    src={def}
                    alt={superhero}
                    className='hero animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='info animate__animated animate__fadeIn'>
                <ul>
                    <li className='info-item'>Alter ego: <b>{alter_ego}</b></li>            
                    <li className='info-item'>Publisher: <b>{publisher}</b></li>            
                    <li className='info-item'>First appearance: <b>{first_appearance}</b></li>
                    <li className='info-item'>Characters: <b>{characters}</b></li>
                </ul>

                <div className='bio'>
                    <h2>Superpowers</h2>
                    {
                        superpower ? <p>{superpower}</p> : <p>In proccess...</p>
                    }
                </div>

                <button 
                    className='btn-back'
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>

        </div>
    )

};

export default HeroScreen;
