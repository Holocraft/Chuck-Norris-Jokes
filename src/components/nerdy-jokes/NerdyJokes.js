import React from 'react';
import styles from '../jokes/Jokes.module.scss';

const NerdyJokes = props => {
  return (
    <div>
      {props.nerd.map(joke => {
        return (
          <div className="card darken-1" key={joke.id}>
            <div className="card-content">
              <blockquote>
                <span className="card-title">
                  <p className={styles.p}>{`Chuck Norris Joke #${joke.id}`}</p>
                  <img
                    className={styles.cardLogo}
                    src={'/assets/chuck-norris-approved.jpg'}
                    alt="chuck approved"
                  />
                </span>
                <p>{joke.joke.replace(/(&quot;)/g, '"')}</p>
              </blockquote>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NerdyJokes;
