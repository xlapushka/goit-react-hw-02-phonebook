
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { IoFingerPrintSharp } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import css from './styles.module.css';

// Filter.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filter: PropTypes.string.isRequired,
// };


export class Filter extends Component {
  state = {
    filter: '',
  };

  inputSearchNameId = nanoid();

  handleInputSearchChange = event => {
    const filter = event.currentTarget.value;
    this.setState({
      filter: filter,
    });
    this.props.searchByName(filter);
  };


  render() {
    return (
      <div className={css.filterList}>
        {/* ================ lable не включає input, тому id i htmlFor ====================
         */}
        <label className={css.contactName} htmlFor={this.inputSearchNameId}>
          <span className={css.icon}>
            <IoFingerPrintSharp />
          </span>
          Search by Name
        </label>

        <div className={css.contactName}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.filter}
            onChange={this.handleInputSearchChange}
            id={this.inputNameId}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
}
