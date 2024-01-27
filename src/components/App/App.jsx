import styles from './App.module.css';
import { Phonebook } from '../Phonebook/Phonebook';

export const App = () => {

  return <div className={styles.container}>
    <Phonebook />
  </div>
};

