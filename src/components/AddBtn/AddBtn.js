import React from 'react';
import { connect } from 'react-redux';
import styles from './AddBtn.module.scss';
import { addChildren } from '../../actions';

const AddBtn = ({ addChildren }) => (
  <div className={styles.addBtn__container}>
    <button className={styles.addBtn} onClick={addChildren}>
      Add input
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addChildren: (type, key) => dispatch(addChildren()),
  };
};

export default connect(null, mapDispatchToProps)(AddBtn);
