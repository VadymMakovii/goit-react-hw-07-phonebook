import axios from 'axios';

axios.defaults.baseURL = 'https://63b2f32a5901da0ab372e575.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async (name, phone) => {
  const { data } = await axios.post('/contacts', { name, phone });
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const editContact = async (id, name, phone) => {
  const { data } = await axios.put(`/contacts/${id}`, { name, phone });
  return data;
};
