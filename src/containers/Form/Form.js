import React from 'react';
import { Field, Form, withFormik } from 'formik';
import Yup from 'yup';

import './Form.css';

class FormLogin extends React.Component {
 

  //For auto signin.
  // componentDidMount() {
   
  // }

  render() {

    return (
      <div className='AppForm'>
        <Form className='Form'  >
          <div className='Input'>
            <Field type='name' name='name' placeholder='Your Name' autoFocus />
            {this.props.touched.name && this.props.errors.name && <p>{this.props.errors.name}</p>}
          </div>
          <div className='Input'>
            <Field type='password' name='password' placeholder='Password' />
            {this.props.touched.password && this.props.errors.password && <p>{this.props.errors.password}</p>}
          </div>
          <button disabled={this.props.isSubmitting}>Login</button>
        </Form>
      </div>
    )
  }
}

//Adding formik to the form.
const FormikApp = withFormik({
  //Mapping user input to values.
  mapPropsToValues({ name, password, history }) {
    return {
      name: name || '',
      password: password || '',
      history: history || ''
    }
  },
  //Validation schema for the form.
  validationSchema:  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
  }),
  // 
  // Handling the login or Signup event.
  handleSubmit(values, { resetForm, setErrors, setFieldError, setSubmitting }) {
    console.log('Submitted!');
    values.history.push('/home');
  }
})(FormLogin);

export default FormikApp;
