import { useId } from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  addUser: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  addNumber: Yup.string().min(7, "Too short").max(14, "Too long").required("Required"),
});


const initialValues = {
  addUser: "",
  addNumber: "",
};

export const ContactForm = ({ addNewUser }) => {
    const nameFieldId = useId();
    const nummberlFieldId = useId();

    const [newUser, setNewUser] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewUser(newUser, newNumber);
        setNewUser("");
        setNewNumber("");
    };


    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={FeedbackSchema}
                
            >
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.box}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field
                            className={styles.label}
                            type="text"
                            name="addUser"
                            placeholder="Name Surname"
                            value={newUser}
                            onChange={(event) => setNewUser(event.target.value)}
                            id={nameFieldId}
                        />
                        <ErrorMessage
                          name="addUser"
                          component="div"
                          className={styles.error}
                        />
                    </div>
                    
                    <div className={styles.box}>
                        <label htmlFor={nummberlFieldId}>Number</label>
                        <Field
                            className={styles.label}
                            type="text"
                            name="addNumber"
                            placeholder="Number"
                            value={newNumber}
                            onChange={(event) => setNewNumber(event.target.value)}
                            id={nummberlFieldId}
                        />
                        <ErrorMessage
                           name="addNumber"
                           component="div"
                           className={styles.error}
                        />
                    </div>
                    
                    <button type="submit" className={styles.button}>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};
