import React, {Component} from 'react';
import { Form } from './form';
import { ContactList } from './contactList'
import css from './styles.module.css'



export class App  extends Component {
  // state = {
  //   contacts: [],
  //   name: ''
  // }

  state = {
    contacts: [
      // {id: '', name: '', number: ''},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  formSubmitHandler = data => { 
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
      }),
    );
  }

  render() {
  return (
    <>
      <div className={css.page}>
        <Form onSubmit={this.formSubmitHandler} />

        {((this.state.contacts.length !== 0) &&
          <ContactList contacts={this.state.contacts} />
        )}  
      </div>
    </>
  );};
};
