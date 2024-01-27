import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '../Button/Button';
import styles from './Contact.module.css';

export const Contact = ({items, onDelete}) => {
    return (
        <>
            {items.map((item) =>
                <li className={styles.item} key={item.id}>
                    <div className={styles.box}>
                        <div className={styles.str}>
                            <IoPerson className={styles.icon} /><span className={styles.name}>   {item.name}</span>
                        </div>
                        <div className={styles.str}>
                            <FaPhoneAlt className={styles.icon} /><span className={styles.number}>   {item.number}</span>
                        </div>
                    </div>
                    <Button onClick={() => onDelete(item.id)}>Delete</Button>
                </li>
            )}
        </>
    );
};
