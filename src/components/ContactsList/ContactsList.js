import PropTypes from 'prop-types';
import ContactsListItem from "components/ContactsListItem/ContactsListItem";

const ContactsList = ({contacts, onDelete}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsListItem contacts={contacts} onDelete={onDelete} />
    </div>
  )
}

export default ContactsList;

ContactsList.prototypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}