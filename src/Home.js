import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main-container';
import Main2 from './components/Main-container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageSlider from './components/Slider';
import Hero from './components/Hero-container';
import { imgdata } from './components/img-data';
import ArticleContainer from './components/Article-container';
import ImageSlider2 from './components/Slider2';
import SimpleSlider from './components/Slider2';
import SSlider from './components/Slider3'
import Footer from './components/Footer';
import SApp from './components/pages/About';
import Biographies from './components/pages/biographies';

import NewArrivals from './components/pages/New-Arrivals';
import { Link } from 'react-router-dom';
import './components/Navbar.css';

class Home extends Component{

  constructor(){
    super();
    this.state={
      books:[]
  
    }

  }

  componentDidMount(){
    fetch('./data.json')
    .then(response=>response.json())
    .then(user =>this.setState({books: user}));
  }

  render(){ return (
    <>
    
        
        <Main></Main>
        <div className='gg'>
        <div className='nav-item'>
                <Link
                  to='/New-Arrivals'
                  className='nav-links1'
                  
                >
                  <h1>New Arrivals ----></h1>
                </Link>
              </div>
        <ImageSlider>
        {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
        </ImageSlider> </div>
       <ArticleContainer></ArticleContainer>
       <div className='gg'>

     <SimpleSlider> 
       {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
       </SimpleSlider>
       </div>
       <div className='ggg'>
       <SSlider> 
       {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
       </SSlider>
       </div>

      
     
    </>
  );
}}

export default Home;
