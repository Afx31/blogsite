import React, { useState } from 'react';
import './AuthPage.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';

const LoginPage = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // Deconstruction state for ease of access
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />
  };

  return (
    <form className='form-signin text-center' onSubmit={(e) => onSubmit(e)}>
      <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
      <div className='form-group'>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          className='form-control'
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='form-control'
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className='checkbox mb-3'>
        <label>
          <input type='checkbox' value='remember-me' /> Remember me
        </label>
      </div>
      <button type='submit' className='btn btn-lg btn-primary btn-block ' value='Login' >
        Login
      </button>
      <p className='auth-alternative'>
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </form>
  )
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginPage);