import React from 'react';

import styles from '../jokes/Jokes.module.scss';

const BrendanJoke = props => {
  return (
    <div>
      <div className="card darken-1" key={props.joke.id}>
        <div className="card-content">
          <blockquote>
            <span className="card-title">
              <p className={styles.p}>{`Chuck Norris Joke #${
                props.joke.id
              }`}</p>
              <img
                className={styles.cardLogo}
                src={'/assets/chuck-norris-approved.jpg'}
                alt="chuck approved"
              />
            </span>
            <p>{props.joke.joke.replace(/(&quot;)/g, '"')}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BrendanJoke;
