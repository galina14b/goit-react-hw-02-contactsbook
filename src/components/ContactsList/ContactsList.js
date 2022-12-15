import ContactsListItem from "components/ContactsListItem/ContactsListItem";

const ContactsList = ({contacts}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactsListItem contacts={{ contacts }}/>
    </div>
  )
}

export default ContactsList;