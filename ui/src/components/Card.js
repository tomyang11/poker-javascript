import React from 'react';
import '../css/card.css'

// Card name should be formatted as follows: '5_of_spades' , '6_of_clubs'
const Card = ({ name }) => {
    return ( 
        <img className="card" src={require(`../assets/${name}.png`)} alt={name} height="150" />
     );
}
 
export default Card;


// ./2_of_clubs.png
