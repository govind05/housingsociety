import React from 'react';
import { Field, Form, withFormik } from 'formik';
import Yup from 'yup';
import axios from 'axios';
import { connect } from 'react-redux';

import './Form.css';
import { authSuccess } from '../../store/actions/users';

class FormLogin extends React.Component {

  //For auto signin.
  componentDidMount() {
    const token = localStorage.getItem('token')
    if(token){
      this.props.history.replace('/home')
    }
  }

  render() {

    return (
      <div className='AppForm'>
        <Form className='Form'  >
          <div className='Error'>
            <Field type='hidden' name='error' />
            {this.props.errors.error && <p>{this.props.errors.error}</p>}
          </div>
          <div className='Input'>
            <Field type='name' name='name' placeholder='Username' autoFocus />
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
  mapPropsToValues(props) {
    return {
      name: props.name || '',
      password: props.password || '',
      history: props.history || '',
      ...props,
    }
  },
  //Validation schema for the form.
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
  }),

  // Handling the login or Signup event.
  handleSubmit(values, { resetForm, setErrors, setFieldError, setSubmitting }) {
    axios.post('https://thawing-reef-43238.herokuapp.com/api/login', {
      name: values.name,
      password: values.password
    })
      .then(res => {
        if (res.status === 200) {
          setSubmitting(false);
          resetForm();
          values.onAuthSuccess(res.data.token, res.data.uid);
          localStorage.setItem('token', res.data.token);
          values.history.replace('/home');
        }
      })
      .catch(err => {
        console.log(err)
        setFieldError('error', 'Wrong Username or password');
        setSubmitting(false);
      })
  }
})(FormLogin);

const mapStateToProps = state => ({
  token: state.token,
  userId: state.userId,
})

const mapDispatchToProps = dispatch => ({
  onAuthSuccess: (token, userId) => dispatch(authSuccess(token, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormikApp);
