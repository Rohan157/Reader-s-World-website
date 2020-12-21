import React from 'react';
import './cardlist.css';
import './card';
import Card from './card';

const CardList = props => {
    return <div className= 'cardlist'>
                        {props.monster.map(monster=>(
            <Card key={monster.id} monster={monster}/>
          ))}
    </div>
};

export default CardList;
