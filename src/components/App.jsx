import React, {Component} from 'react';
import { Form } from './form';
import { ContactList } from './contactList';
import { Filter } from './filter';
import css from './styles.module.css'



export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    let exists = this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase());

    if (!exists) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }))
    } else { 
      alert('This contact is already exists 🤓');
    }
  };

  searchByName = filter => {
    this.setState({
      filter: filter,
    });
  }

  deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  }

  
  render() {
    const normilizedFilter = this.state.filter.toLowerCase();
    const filtered = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
    

    return (
      <>
        <div className={css.page}>
          <Form
            onSubmit={this.formSubmitHandler}
          />

          {this.state.contacts.length !== 0 && (
            <>
              <Filter searchByName={this.searchByName} />
              <ContactList
                contacts={filtered}
                deleteContact={this.deleteContact}
              />
            </>
          )}
        </div>
      </>
    );
  }
};
