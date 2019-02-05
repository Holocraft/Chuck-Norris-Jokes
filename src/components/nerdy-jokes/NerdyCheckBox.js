import React from 'react';
import { Row, Input } from 'react-materialize';
import styles from '../CheckBox.module.css';

const NerdyCheckBox = props => {
  return (
    <div className={styles.checkboxSpace}>
      <Row>
        <Input
          onChange={props.handleClick}
          name="group1"
          type="checkbox"
          value="nerdy"
          label="Nerdy"
          className={styles.checkboxColor}
        />
      </Row>
    </div>
  );
};

export default NerdyCheckBox;
