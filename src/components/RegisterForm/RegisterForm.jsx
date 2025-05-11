import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./RegisterForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function RegisterForm() {
    const dispatch = useDispatch();
    
    const validationSchemaRegister = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short!").required("Required"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Passwords do not match").required("Confirm the password"),
     });
    
    
      const onSubmit = async (values, actions) => {
          try {
        console.log("Submit values:", values);
      await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
    };
    

    return (
        <div className={s.formwrapper}>
            <div className={s.formbox}> 
         <Formik
      validationSchema={validationSchemaRegister}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
            {({ isValid, dirty }) => (
                
                <Form>
                    
                    <label htmlFor="name">Name:</label>
                    
  <Field
    type="text"
    name="name"
    id="name"
    placeholder="Enter your name here"
  />
  <ErrorMessage name="name" component="span" />

                    <label htmlFor="email">Email:</label>
                    
  <Field
    type="text"
    name="email"
    id="email"
    placeholder="Enter your email here"
  />
  <ErrorMessage name="email" component="span" />

                    <label htmlFor="password">Password:</label>
                    
  <Field
    type="password"
    name="password"
    id="password"
    placeholder="Enter your password here"
  />
  <ErrorMessage name="password" component="span" />

                    <label htmlFor="passwordConfirm">Confirm password:</label>
                    
  <Field
    type="password"
    name="passwordConfirm"
    id="passwordConfirm"
    placeholder="Enter your password again"
  />
  <ErrorMessage name="passwordConfirm" component="span" />

  <button type="submit" disabled={!isValid || !dirty}>
    Register
  </button>
</Form>

            )}
            

                </Formik>
            </div>
             </div>
  );
}
 