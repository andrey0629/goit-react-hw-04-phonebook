import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ContactText,
  DeleteButton,
} from './StyledComponents/Contacts.styled';

function ContactsList({ contacts, onDelete }) {
  return (
    <div>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactText>{contact.name}:</ContactText>
            <ContactText>{contact.number}</ContactText>
            <DeleteButton
              type="button"
              name="delete"
              value={contact.id}
              onClick={onDelete}
            >
              Delete
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
