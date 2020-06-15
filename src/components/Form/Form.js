import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Form.module.scss';
import { addChildren, removeItem, updateItem } from '../../actions';

class Form extends React.Component {
  state = {
    condition: null,
    value: null,
    question: null,
    type: null,
  };

  componentDidMount() {
    const { condition, value, question, type } = this.props.value.content;
    this.setState({ condition, value, question, type });
    this.initMethods();
  }

  initMethods() {
    this.changeValue = (e) => {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        this.updateStore
      );
      
    };

    this.updateStore = () => {
      this.props.updateItem(this.state, this.props.value.key);
    };

    this.handleClick = (e, bool) => {
      e.preventDefault();

      if (bool) {
        this.props.addChildren(this.state.type, this.props.value.key);
      } else {
        this.props.removeItem(this.props.value.key);
      }
    };
  }

  render() {
    this.initMethods();
    const { type, children, key } = this.props.value;

    return (
      <div className={`${styles.form} ${type ? null : styles.formFirst}`}>
        <form className={styles.form__container}>
          {type && (
            <div className={`${styles.form__condition} ${styles.row}`}>
              <label htmlFor={`${key}_condition`}>Condition</label>
              <select
                name="condition"
                id={`${key}_condition`}
                value={this.state.condition ? this.state.condition : ''}
                onChange={this.changeValue}
              >
                <option value="equals">Equals</option>
                {type === 'number' && (
                  <>
                    <option value="greater">Greater than</option>
                    <option value="less">Less than</option>
                  </>
                )}
              </select>
              {type !== 'boolean' && (
                <input
                  name="value"
                  type={type}
                  defaultValue={this.state.value ? this.state.value : ''}
                  onBlur={this.changeValue}
                />
              )}
              {type === 'boolean' && (
                <select
                  name="value"
                  value={this.state.value ? this.state.value : ''}
                  onChange={this.changeValue}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              )}
            </div>
          )}

          <div className={`${styles.form__question} ${styles.row}`}>
            <label htmlFor={`${key}_question`}>Question</label>
            <input
              name="question"
              id={`${key}_question`}
              type="text"
              defaultValue={this.state.question ? this.state.question : ''}
              onBlur={this.changeValue}
            />
          </div>

          <div className={`${styles.form__type} ${styles.row}`}>
            <label htmlFor={`${key}_type`}>Type</label>
            <select
              name="type"
              id={`${key}_type`}
              value={this.state.type ? this.state.type : ''}
              onChange={this.changeValue}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="boolean">Yes / No</option>
            </select>
          </div>

          <div className={`${styles.form__submit} ${styles.row}`}>
            <button
              className={styles.form__add_btn}
              onClick={(e) => this.handleClick(e, true)}
            >
              Add Sub-input
            </button>
            <button
              className={styles.form__remove_btn}
              onClick={(e) => this.handleClick(e, false)}
            >
              Delete
            </button>
          </div>
        </form>
        <div className={styles.children}>
          {children.map((children) => (
            <Form
              value={children}
              key={children.key}
              addChildren={this.props.addChildren}
              removeItem={this.props.removeItem}
              updateItem={this.props.updateItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  value: PropTypes.shape({
    type: PropTypes.oneOf(['text', 'number', 'boolean']),
    children: PropTypes.array.isRequired,
    content: PropTypes.shape({
      condition: PropTypes.oneOf(['equals', 'greater', 'less']),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      question: PropTypes.string,
      type: PropTypes.oneOf(['text', 'number', 'boolean']),
    }),
  }),
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChildren: (type, key) => dispatch(addChildren(type, key)),
    removeItem: (key) => dispatch(removeItem(key)),
    updateItem: (value, key) => dispatch(updateItem(value, key)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
