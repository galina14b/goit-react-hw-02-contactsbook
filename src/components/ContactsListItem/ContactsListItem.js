import { nanoid } from 'nanoid';
const ContactsListItem = ({ contacts }) => {
  return (
    <ul>{Object.keys(contacts).map(({ contact }) => (
      <li key={nanoid()}>{console.log(contact)}</li>)
    )}
    </ul>
  )
}

export default ContactsListItem;

