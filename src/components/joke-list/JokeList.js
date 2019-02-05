import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke, fetchBrendanJoke } from '../../actions';

import Jokes from '../jokes/Jokes';
import NerdyJokes from '../nerdy-jokes/NerdyJokes';
import ExplicitJokes from '../explicit-jokes/ExplicitJokes';
import BrendanJoke from '../brendan-joke/BrendanJoke';
import NerdyCheckBox from '../nerdy-jokes/NerdyCheckBox';
import ExplicitCheckBox from '../explicit-jokes/ExplicitCheckBox';
import BrendanCheckbox from '../brendan-joke/BrendanCheckbox';
import styles from './JokeList.module.scss';

class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allJokes: true,
      nerdy: false,
      explicit: false,
      brendan: false
    };

    this.handleNerdyClick = this.handleNerdyClick.bind(this);
    this.handleExplicitClick = this.handleExplicitClick.bind(this);
    this.handleBrendanClick = this.handleBrendanClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchJoke();
    this.props.fetchBrendanJoke();
  }

  renderJokes() {
    if (this.state.allJokes) {
      return (
        <div>
          <Jokes joke={this.props.jokes.value} />
        </div>
      );
    }
  }

  renderExplicitJokes() {
    if (this.state.explicit) {
      return (
        <div>
          <ExplicitJokes
            joke={this.props.jokes.value}
            explicit={this.filterExplicitJokes()}
          />
        </div>
      );
    }
  }

  renderNerdyJokes() {
    if (this.state.nerdy) {
      return (
        <div>
          <NerdyJokes
            joke={this.props.jokes.value}
            nerd={this.filterNerdyJokes()}
          />
        </div>
      );
    }
  }

  renderBrendanJoke() {
    if (this.state.brendan) {
      return (
        <div>
          <BrendanJoke joke={this.props.brendan.value} />
        </div>
      );
    }
  }

  filterNerdyJokes(jokes = this.props.jokes.value) {
    return jokes.filter(joke => {
      return joke.categories[0] === 'nerdy';
    });
  }

  filterExplicitJokes(jokes = this.props.jokes.value) {
    return jokes.filter(joke => {
      return joke.categories[0] === 'explicit';
    });
  }

  handleNerdyClick() {
    this.setState({
      nerdy: !this.state.nerdy,
      allJokes: !this.state.allJokes
    });
  }

  handleExplicitClick() {
    this.setState({
      explicit: !this.state.explicit,
      allJokes: !this.state.allJokes
    });
  }

  handleBrendanClick() {
    this.setState({
      brendan: !this.state.brendan,
      allJokes: !this.state.allJokes
    });
  }

  render() {
    return (
      <div>
        <div className={styles.checkboxContainer}>
          <NerdyCheckBox handleClick={this.handleNerdyClick} />
          <ExplicitCheckBox handleClick={this.handleExplicitClick} />
          <BrendanCheckbox handleClick={this.handleBrendanClick} />
        </div>
        {this.renderNerdyJokes()}
        {this.renderExplicitJokes()}
        {this.renderBrendanJoke()}
        {this.renderJokes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jokes: state.jokes, brendan: state.brendan };
}

export default connect(
  mapStateToProps,
  { fetchJoke, fetchBrendanJoke }
)(JokeList);
