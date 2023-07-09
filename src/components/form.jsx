import {Component} from 'react';
// import PropTypes from 'prop-types';
// IoPersonRemove,
import { IoPulse, IoKeypad } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import css from './styles.module.css';

// Form.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired
// };

export class Form extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget.name, event.currentTarget.value);
    this.setState({
      [name]: value,
    });
  };

  inputSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.inputSubmit} className={css.formList}>
        <label className={css.contactName} htmlFor={this.inputNameId}>
          <span className={css.icon}>
            <IoPulse />
          </span>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.inputNameId}
            autoComplete="off"
          />
        </label>

        <label className={css.contactNumber} htmlFor={this.inputNumberId}>
          <span className={css.icon}>
            <IoKeypad />
          </span>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.inputNumberId}
            autoComplete="off"
          />
        </label>

        <button type="submit" className={css.contactButtonAdd}>
          Add Contact
        </button>
      </form>
    );
  }
} 