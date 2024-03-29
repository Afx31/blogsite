// import React, { useState } from 'react';
// import './AuthPage.css';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import PropTypes from 'prop-types';
// import { Button, Input } from 'rixun-ui';

// const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmpassword: ''
//   });

//   const { name, email, password, confirmpassword } = formData;

//   const onChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmpassword)
//       setAlert('Passwords do not match', 'danger');
//     else
//       await register({ name, email, password });
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/login' />
//   };

//   return (
//     <form className='form-container text-center' onSubmit={(e) => onSubmit(e)}>
//       <div className='form-signin'>
//         <h1 className='h3 mb-3 font-weight-normal'>Create Your Account</h1>
//         <div className='form-group'>
//           <Input
//             placeholder='Name'
//             className='form-control'
//             value={name}
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <div className='form-group'>
//           <Input
//             placeholder='Email address'
//             className='form-control'
//             value={email}
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <div className='form-group'>
//           <Input
//             placeholder='Password'
//             className='form-control'
//             value={password}
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <div className='form-group'>
//           <Input
//             placeholder='Confirm Password'
//             className='form-control'
//             value={confirmpassword}
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <Button
//           name='Register'
//           className='btn-auth'
//         />
//         <p className='auth-alternative'>
//           Already have an account? <Link to='/login'>Sign In</Link>
//         </p>
//       </div>
//     </form>
//   )
// };

// RegisterPage.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { setAlert, register })(RegisterPage);