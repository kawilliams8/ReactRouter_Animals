import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import unicornData from './data/unicorn-data';
import sharkData from './data/shark-data';
import puppyData from './data/puppy-data';
import dolphinData from './data/dolphin-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Router>
        <header>
          <NavLink to="/unicorns" className="nav">Unicorns 🦄</NavLink>
          <NavLink to="/puppies" className="nav">Puppies 🐶</NavLink>
          <NavLink to="/sharks" className="nav">Sharks 🦈</NavLink>
          <NavLink to='/dolphins' className="nav">Dolphins 🐬</NavLink>
        </header>
          <Route exact path='/' component={ Home } />
          <Route exact path='/unicorns' render={ () => <Creatures data={unicornData} /> } />
          <Route exact path='/puppies' render={ () => <Creatures data={puppyData}/> } />
          <Route exact path='/sharks' render={ () => <Creatures data={sharkData}/> } />
          <Route exact path='/dolphins' render={ () => <Creatures data={dolphinData} /> } />

        <Route path='/unicorns/:id' render={ ({ match }) => {
          const {id} = match.params;
          const creature = unicornData.find(el => el.id == parseInt(id));
          return <CreatureDetails {...creature}/>
        }} />
        <Route path='/puppies/:id' render={({ match }) => {
          const creature = puppyData.find(puppy => puppy.id == match.params.id);
          return <CreatureDetails {...creature}/>
        }} />
        <Route path='/sharks/:id' render={({ match }) => {
          const creature = sharkData.find(shark => shark.id == match.params.id);
          return <CreatureDetails {...creature}/>
        }} />
        <Route path='/dolphins/:id' render={({ match }) => {
          const creature = dolphinData.find(dolphin => dolphin.id == match.params.id);
          return <CreatureDetails {...creature}/>
        }} />
        </Router>
      </main>
    );
  }
}
