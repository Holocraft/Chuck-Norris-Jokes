import React from 'react';
import { Row, Input } from 'react-materialize';
import styles from '../CheckBox.module.css';

const ExplicitCheckBox = props => {
  return (
    <div className={styles.checkboxSpace}>
      <Row>
        <Input
          onChange={props.handleClick}
          name="group1"
          type="checkbox"
          value="explicit"
          label="Explicit"
          className={styles.checkboxColor}
        />
      </Row>
    </div>
  );
};

export default ExplicitCheckBox;
