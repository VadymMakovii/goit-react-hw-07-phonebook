import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ContactsLoader } from 'components/Loader/Loader';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Container,
  Header,
  Main,
  Section,
  Wrapper,
  Title,
  SectionTitle,
  Footer,
} from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Phonebook</h1>
          <Filter />
        </Header>
        <Main>
          <ContactForm />
          <Section>
            <SectionTitle>
              <Title>Contacts</Title>
            </SectionTitle>
            {isLoading ? (
              <ContactsLoader />
            ) : contacts?.length > 0 ? (
              <ContactList />
            ) : (
              <h3>
                You don't have contacts yet. Please add your first contact!
              </h3>
            )}
          </Section>
        </Main>
        <Footer />
      </Wrapper>
      <Toaster />
    </Container>
  );
};
