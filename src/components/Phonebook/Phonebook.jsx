import propTypes from 'prop-types';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookBtn,
} from './Phonebook.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name: name, number: number, id: nanoid(10) });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm autoComplete="off" onSubmit={handleSubmit}>
      <PhonebookLabel htmlFor="name">
        Name:
        <PhonebookInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel htmlFor="number">
        Phone:
        <PhonebookInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookBtn type="submit">Add Contact</PhonebookBtn>
    </PhonebookForm>
  );
};

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};
