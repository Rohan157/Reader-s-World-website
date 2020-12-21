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
import About from './components/pages/About';
import Biographies from './components/pages/biographies';
import Fiction from './components/pages/Fiction';
import NewArrivals from './components/pages/New-Arrivals';
import Home from './Home';
import Signup from './components/pages/Signup';

class App extends Component{

  
  render(){
    return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/New-Arrivals' component={NewArrivals} />
          <Route exact path='/Fiction' component={Fiction} />
          <Route exact path='/biograpies' component={Biographies} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Signup' component={Signup}/>
          <Route exact path='/sign-up' component={Signup}/>

          
        </Switch>
        <Footer></Footer>
      </Router>
      
    </>
  );
}}


export default App;
