
import './App.css';
import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import selectors from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Loader from "./components/Loader/Loader"
import Layout from "./components/Layout/Layout";
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));



function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
    
    
  if (isRefreshing) {
    return <Loader />;
  }

        return (
      
              <Suspense fallback={<Loader />}>
                <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

                
           )
    }


export default App
