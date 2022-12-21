import React from "react";
import { nanoid } from "nanoid";
import css from "./ContactsForm.module.css"

class ContactsForm extends React.Component {
  state = {
    name: '',
    number: '',
  }

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChanges = event => {

    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ name:this.state.name, number:this.state.number })
    this.reset()
  }

  reset = () => {
    this.setState({ name: '' })
    this.setState({number: ''})
  }

  render() {
    return <div className={css.block}>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name 
          <input
            type="text"
            id={this.nameInputId}
            value={this.state.name}
            name="name"
            onChange={this.handleChanges}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number 
          <input
            type="tel"
            id={this.numberInputId}
            value={this.state.number}
            name="number"
            onChange={this.handleChanges}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  }
}

export default ContactsForm