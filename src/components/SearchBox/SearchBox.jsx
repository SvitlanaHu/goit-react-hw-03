import { useId } from "react";
import styles from './SearchBox.module.css'

export const SearchBox = ({value, onChange}) => {
    const labelId = useId();
    return (
        <div className={styles.container}>
            <label htmlFor={labelId}>Find contacts by name</label>
            <input
                 className={styles.box}
                    type="text"
                    name="username"
                    id={labelId}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
            />
            
        </div>
    )
}