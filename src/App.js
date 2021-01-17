import { Component } from "react";
import './App.css';
import shortid from 'shortid'

import Section from "./components//Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ' ',
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    if (contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = { id: shortid.generate(), name: data.name, number: data.number };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      };
    })
  }

  filterHandle = () => {
    const { filter, contacts } = this.state;

    return filter
      ? contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      )
      : contacts;
  }

  filterInputhandler = e => {
    const filter = e.target.value;
    this.setState({ filter });

  };

  onDelete = e => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== e.target.id),
        ],
      };
    });
  };
  render() {
    const { filter } = this.state
    return (
      <>
        <Section title='Phonebook'>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title='Contacts'>
          <Filter value={filter} onFilterInput={this.filterInputhandler} />
          <ContactList contacts={this.filterHandle()} onDelete={this.onDelete} />
        </Section>
      </>
    )
  }


}

