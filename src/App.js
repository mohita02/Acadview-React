import React, { Component } from 'react';
import Display from './Display';
class App extends Component {
  render() {
    return (
     <div>
       <h1>Hey!! this is my React App!!</h1>
       <button type="button">Switch Names</button>
       <Display name='Mohita' age='21' birthmonth='sep' />
       <Display name='Mayank' age='21' birthmonth='feb' />
       <Display name='Palsheeta' age='19' birthmonth='sep' />
       <Display />
     </div>
    );
  }
}

export default App;
