import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsOperations';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, BtnBox, ContactBox, Name, Number } from './ContactItem.styled';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Item>
      <ContactBox>
        <Name>
          <FaUser /> {name}
        </Name>
        <Number>
          <FaPhoneAlt /> {number}
        </Number>
      </ContactBox>
      <BtnBox>
        <Button type="button" name="edit" onClick={toggleModal}>
          Edit
        </Button>
        <Button
          type="button"
          name="delete"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </BtnBox>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm
            onClose={toggleModal}
            id={id}
            value={name}
            number={number}
          />
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
