import styles from './ContactList.module.css';
import { Contact } from "../Contact/Contact";

export const ContactList = ({ items, onDelete }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.contact}>
                <Contact items={ items } onDelete={onDelete} />
            </ul> 
        </div>
    );
};