import { render } from '@testing-library/react'
import React from 'react'
import './Article-container.css'
import ImageSlider from './Slider'

class ArticleContainer extends React.Component{
    render(){ return(
        <div className='full'>
            <h1>Author of the Month</h1>
            <h1> Paulo Coelho </h1>  
            <div className='aa'>
            <img className='author' src={"images/paulo.png"} width='250px' height='250px' align='right'/>
            <p> Paulo Coelho wrote the best-selling novel, 'The Alchemist,' which sold 35 million copies and is the most translated book in the world by a living author</p>
           <p> Paulo Coelho is a Brazilian author. When Coelho was 38 years old, he had a spiritual awakening in Spain and wrote about it in his first book, The Pilgrimage. It was his second book, The Alchemist, which made him famous. He’s sold 35 million copies and now writes about one book every two years.</p>
           <p>Coelho was born on August 24, 1947, in Rio de Janeiro, Brazil. Coelho attended Jesuit schools and was raised by devout Catholic parents. He determined early on that he wanted to be a writer but was discouraged by his parents, who saw no future in that profession in Brazil. Coelho's rebellious adolescence spurred his parents to commit him to a mental asylum three times, starting when he was 17. "I have forgiven," Coelho said. "It happens with love, all the time - when you have this love towards someone else, but you want this person to change, to be like you. And then love can be very destructive."Coelho eventually got out of institutional care and enrolled in law school, but dropped out to indulge in the "sex, drugs and rock 'n' roll" of hippie life in the 1970s. He wrote song lyrics for Brazilian musicians protesting the country's military rule. He was jailed three times for his political activism and subjected to torture in prison.
           </p>
          
           </div>
            
            </div>
    );
    }
}

export default ArticleContainer;