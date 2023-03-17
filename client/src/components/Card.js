import { Link } from "react-router-dom";

import React from 'react';

export const Card = props => (
    <div className="card-continer">
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer">
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`} />
            <div>
                <h2>{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}</h2>
                <div className='let_me_fight'>
                    
                    <Link to='/fighting'>Just let me fight!...</Link>
                </div>
            </div>
        </a>
    </div>
);
