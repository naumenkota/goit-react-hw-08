import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { addContact } from '../../redux/contactsOps';
import {  useDispatch } from "react-redux";


export default function ContactForm() {
 
    const dispatch = useDispatch();
    
    const ContactValidationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    });

  const onSubmit = (values, actions) => {
  const newContact = {
    name: values.name,
    number: values.number
     };
     
  dispatch(addContact(newContact));
  actions.resetForm();
};

    return (
        <Formik
            initialValues={{
            name: "",
            number: ""
        }}
            onSubmit={onSubmit}
            validationSchema={ContactValidationSchema}>
            
            <Form className={s.form}> 
                <div className={s.fieldGroup}>   
                <label htmlFor="name"  className={s.label}>Name:</label>
                <Field className={s.input} type="text" name="name" id="name"   placeholder="Enter name"/>
                    <ErrorMessage className={s.error} name="name" component="span" />
                </div>
                <div className={s.fieldGroup}> 
                <label htmlFor="number" className={s.label}>Number:</label>
                <Field className={s.input} type="tel" name="number" id="number" placeholder="Enter number"/>
                <ErrorMessage className={s.error} name="number" component="span" />
                </div>
                <button className={s.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}