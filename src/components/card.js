import React from 'react';
import './card.scss';

const Card=(props)=>
(
    <div className='cardstyleq'>
        <div className='cardq'>
        <img className='card-imageq' alt='monster' src={`images/${props.monster.id}.png` }/>

        <h2>
         AUTHOR: {props.monster.authors}
         </h2>
         <b>
           PAGES: {props.monster.pageCount}  
           </b>
           <br></br>
          <b>
           CATEGORY: {props.monster.categories}
           </b>
            
        </div>
   
    TITLE: {props.monster.title}
    </div>
)
export default Card;