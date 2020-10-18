import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class  App extends Component {
  constructor(){
    super();
    this.state = {
      monstors: [],
      searchField: ''
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monstors: users}));
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const {monstors, searchField} = this.state;
    const filteredMonsters = monstors.filter( monstor => monstor.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={ this.handleChange }/>
        <CardList monstors = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
