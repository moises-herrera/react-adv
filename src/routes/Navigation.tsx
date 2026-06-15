import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponentsPage,
  FormikAbstractionPage,
  RegisterFormikPage,
  DynamicFormPage,
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route
            path="/formik-abstraction"
            element={<FormikAbstractionPage />}
          />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicFormPage />} />
          <Route path="/*" element={<Navigate to="/register" />} />
        </Routes>
      </div>
    </Router>
  );
};
