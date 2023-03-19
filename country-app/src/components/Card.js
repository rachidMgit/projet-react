import React from 'react';

const Card = ({ country }) => {
    return (
        <div>
            <li className='card'>
                <img
                    src={country.flags[1]}
                    alt={"drapeau " + country.translations.fra.common} />
                <div className='infos'>
                    <h2>{country.translations.fra.common}</h2>
                    <h3>Pop. {country.population.toLocaleString()}</h3>
                </div>
            </li>

        </div>
    );
};

export default Card;
