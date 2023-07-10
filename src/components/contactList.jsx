
import { IoPulse, IoKeypad } from 'react-icons/io5';
import css from './styles.module.css';


export const ContactList = ({contacts , deleteContact}) => {

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

          <button type="submit" className={css.contactButtonDelete} onClick={()=> deleteContact(contact.id)}>
            Delete Conact
          </button>
        </li>
      ))}
    </ul>
  );
}