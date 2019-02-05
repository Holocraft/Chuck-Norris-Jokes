import React from 'react';
import { Row, Input } from 'react-materialize';
import styles from '../CheckBox.module.css';

const ExplicitCheckBox = props => {
  return (
    <div>
      <Row>
        <Input
          onChange={props.handleClick}
          name="group1"
          type="checkbox"
          value="brendan"
          label="Brendan"
          className={styles.checkboxColor}
        />
      </Row>
    </div>
  );
};

export default ExplicitCheckBox;
