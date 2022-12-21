import React from "react";
import css from "./App.module.css"
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  handleFilter = (onChange) => {
    this.setState({ filter: onChange })
  }

  handleData = (data) => {
    if (this.state.contacts.find(contact => (contact.name === data.name))) {
      return alert(data.name + ' is already in contacts.')
    } else {
      return this.setState(prevState => {
        return { contacts: [...prevState.contacts, { id: nanoid(), name: data.name, number: data.number}]}
      })
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  filtration = (filter) => {
    const filteredData = this.state.contacts.filter((el) => {
      if (filter === '') {
        return el;
      }
      else {
        return el.name.toLowerCase().includes(filter)
      }
    })
    return (
      <ContactsList contacts={filteredData} onDelete={ this.deleteContact} />
    )
  }
  
  render() {
    return (
      <div className={css.block}>
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={this.handleData} />
        { this.filtration(this.state.filter.toLowerCase())}
        
        <Filter onChange={this.handleFilter} />
      </div>
    )
  }
};

export { App }
