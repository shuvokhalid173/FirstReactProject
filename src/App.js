import logo from './logo.svg';
import './App.css';
import Counters from './component/counters';
import NavBar from './component/navbar';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDeleteEvent = (pid) => {
    const newCounters = this.state.counters.filter(c => c.id !== pid);
    this.setState({ counters: newCounters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index].value-- ;
    }
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalItem={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDeleteEvent}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
