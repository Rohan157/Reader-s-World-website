import React, {Component} from 'react';
import CardList from '../cardlist'
import SearchBox from '../searchbox';

class Fiction extends Component {
  constructor(){
    super();
    this.state={
      monster:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response=>response.json())
    .then(user =>this.setState({monster: user}));
  }
  
  handleChange =(e) => this.setState({searchField: e.target.value})

  render(){

    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="SApp">
        <h1>Fictions Section</h1>
        <SearchBox
          placeholder='Search Titles/Authors'
          handleChange={this.handleChange}
        />
        <CardList monster = {filteredMonsters} />
      </div>
    );
  }
}

export default Fiction;
