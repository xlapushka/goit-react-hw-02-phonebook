import PropTypes from 'prop-types';
  //  IoPersonAdd, IoPulse, IoFingerPrintSharp, 
import {
  IoPulse, IoKeypad,
} from 'react-icons/io5';
// import { nanoid } from 'nanoid';
import css from './styles.module.css';

ContactList.propTypes ={
  contacts : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    number : PropTypes.string.isRequired
  })).isRequired
}

export function ContactList({contacts}) {
  // console.log(contacts);

  // let id = nanoid();
  
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.li} key={contact.id}>
          <p className={css.contactName}>
            <span className={css.icon}>
              <IoPulse />
            </span>
            {'  '}
            {contact.name}
          </p>

          <p className={css.contactNumber}>
            <span className={css.icon}>
              <IoKeypad />
            </span>
            {'  '}
            {contact.number}
          </p>

          <button type="button" className={css.contactButtonDelete}>
            Delete Conact
            {/* <span className={css.icon}>
              < IoPersonRemove />
            </span> */}
          </button>
        </li>
      ))}
    </ul>
  );
}