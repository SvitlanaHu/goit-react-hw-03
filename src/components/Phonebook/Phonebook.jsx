import styles from './Phonebook.module.css';
import { ContactForm }  from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';

export const Phonebook = () => {
    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};