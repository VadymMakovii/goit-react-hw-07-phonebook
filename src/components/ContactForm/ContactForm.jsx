import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { addContact, changeContact } from 'redux/contactsOperations';

import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = ({ id, value, number, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  useEffect(() => {
    value && setName(value);
    number && setPhone(number);
    onClose && setShowBtn(true);
  }, [value, number, onClose]);

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const newContactAudit = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const editContactAudit = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
    );

    const buttonText = e.target.elements.button.textContent;

    switch (buttonText) {
      case 'Add contact':
        if (!newContactAudit) {
          dispatch(addContact({ name, phone }));
          reset();
        } else {
          toast.error(`${name} is already in contacts.`);
        }
        break;
      case 'Save change':
        if (!editContactAudit) {
          dispatch(changeContact({ id, name, phone }));
          onClose();
        } else {
          toast.error(`${name} is already in contacts.`);
        }
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmitForm} name={showBtn ? 'editForm' : 'addForm'}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          id={numberInputId}
          value={phone}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" name="button" disabled={isLoading}>
        {showBtn ? 'Save change' : 'Add contact'}
      </Button>
      {showBtn && (
        <Button type="button" name="cancel" onClick={onClose}>
          Cancel
        </Button>
      )}
    </Form>
  );
};

ContactForm.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  number: PropTypes.string,
  onClose: PropTypes.func,
};
