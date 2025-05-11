import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css"

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too short").required("Required"),
  });

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(login(values));
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

    return (
       <div className={s.formwrapper}>
    <div className={s.formbox}> 
    <Formik
      validationSchema={validationSchemaLogin}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
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

          <button type="submit" disabled={!isValid || !dirty}>
            Login
          </button>
        </Form>
      )}
                </Formik>
                 </div>
             </div>
  );
}
