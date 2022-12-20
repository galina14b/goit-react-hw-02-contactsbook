import { nanoid } from "nanoid";
const ContactsListItem = ({ contacts, onDelete }) => {
  return (
    <ul>{contacts.map( contact => (
      <li key={nanoid()}>{contact.name} - { contact.number} <button onClick={() => onDelete(contact.id)}>Delete</button></li>)
    )}
    </ul>
  )
}

export default ContactsListItem;

