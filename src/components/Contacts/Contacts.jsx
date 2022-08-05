import propTypes from 'prop-types';
import { Box } from '../Box';
import { ContactListItem } from './ContactsItem';

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <Box as="ul" mt={4} width="100%">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onRemoveContact}
          />
        );
      })}
    </Box>
  );
};
Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContact: propTypes.func.isRequired,
};
