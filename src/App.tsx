import Draggable from 'gsap/Draggable';
import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Tasks from './Tasks';

class App extends Component {
  componentDidMount() {
    Draggable.create('.draggable');
  }

  render() {
    return (
      <div>
        <Clock />
        <Tasks />
      </div>
    );
  }
}

export default App;
