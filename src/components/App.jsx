import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";

class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }
  
  handleData = ( data ) => {
    console.log(data)
    this.setState( {contacts: [...data]})
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={this.handleData} />
        <ContactsList contacts={this.state.contacts}/>
      </div>
    )
  }
};

export { App }
