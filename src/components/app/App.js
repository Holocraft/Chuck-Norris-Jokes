import React, { Component } from 'react';

import JokeList from '../joke-list/JokeList';
import Header from '../header/Header';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.mainBg}>
        <Header />
        <div className="container">
          <JokeList />
        </div>
      </div>
    );
  }
}

export default App;
