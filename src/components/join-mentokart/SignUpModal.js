import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Axios from 'axios';



const SignUpModal = (props) => {
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [btnClass, setBtnClass] = useState('btn col-12 disabled');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [password, SetPassword] = useState('');
  const [confirm, SetConfirm] = useState('');
  const [firstname, SetFirstname] = useState('');
  const [lastname, SetLastname] = useState('');
  const [username, SetUsername] = useState('');

  const [signup_alert, SetSignupAlert] = useState(false);
  const [signin_alert, SetSigninAlert] = useState(false);

  const [SignInEmail, SetSignInEmail] = useState('');
  const [SignInPassword, SetSignInPassword] = useState('');

  const [showSignUp, setShowSignUp] = useState(true);
  const [ showSignIn, setShowSignIn ] = useState( false );
 

  const ToggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };
  const ToggleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const SignInSubmit = (e) => {
    Axios.post('https://mentorkart.org/api/login', {
      email: SignInEmail,
      password: SignInPassword,
    }).then((res, err) => {
      if (!err) {
        console.log(res);
        if (res.status === 200) {
          SetSigninAlert(true);
          console.log('hello');
          SetSignInEmail('');
          SetSignInPassword('');
        }
      } else {
        console.log(err);
      }
    });
  };
  const SignUpSubmit = (e) => {
    console.log(
      username,
      phone.slice(2, 12),
      email,
      password,
      confirm,
      firstname,
      lastname
    );
    Axios.post('https://mentorkart.org/api/register', {
      username: username,
      mobile_no: +phone.slice(2, 12),
      email: email,
      password: password,
      password_confirmation: confirm,
      user_type: 'MENTEE',
      first_name: firstname,
      last_name: lastname,
      country_code: 91,
      country_name: 'INDIA',
    }).then((res, err) => {
      if (!err) {
        console.log(res);
        if (res.data.status === true) {
          SetSignupAlert(true);
          SetEmail('');
          SetConfirm('');
          SetFirstname('');
          SetLastname('');
          SetPassword('');
          SetPhone('');
          SetUsername('');
        }
      } else {
        console.log(err);
      }
    });
  };

  if (signup_alert === true) {
    setTimeout(() => {
      SetSignupAlert(false);
      window.location.reload();
    }, 3000);
  }
  if (signin_alert === true) {
    setTimeout(() => {
      SetSigninAlert(false);
      window.location.reload();
    }, 3000);
  }

  return (
    <div className='signup-modal'>
      <div className='modal-img d-lg-block d-none col-lg-6'>
        <img src='/images/sign-up.png' alt='' />
      </div>
      <div className='modal-form px-md-5 px-1 d-flex flex-column justify-content-center align-item-center col-lg-6 col-12'>
        {showSignUp === true && (
          <div>
            {signup_alert && (
              <div className='alert alert-success' role='alert'>
                Successfully Registered...
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                SignUpSubmit(e);
              }}
            >
              <fieldset>
                <legend className='d-flex justify-content-between align-items-center mb-3'>
                  <h2>Sign up</h2>
                  <button
                    onClick={() => {
                      props.showModalBtn(false);
                    }}
                    className='btn'
                  >
                    <i className='fas fa-times fa-2x'></i>
                  </button>
                </legend>
                {/* <div className='d-flex justify-content-between align-items-center mb-4'>
                  <div className='form-check'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input '
                        name='optionsRadios'
                        id='optionsRadios1'
                        value='option1'
                      />
                      Individual
                    </label>
                  </div>
                  <div className='form-check'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input'
                        name='optionsRadios'
                        id='optionsRadios2'
                        value='option2'
                      />
                      Professional
                    </label>
                  </div>
                  <div className='form-check disabled'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input'
                        name='optionsRadios'
                        id='optionsRadios3'
                        value='option3'
                      />
                      Enterpreneur
                    </label>
                  </div>
                </div> */}

                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <input
                      type='text'
                      name='Firstname'
                      id='firstname'
                      value={firstname}
                      onChange={(e) => {
                        SetFirstname(e.target.value);
                      }}
                      required
                      className='form-control form-control-sm'
                      placeholder='Firstname'
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <input
                      type='text'
                      name='Lastname'
                      id='lastname'
                      value={lastname}
                      onChange={(e) => {
                        SetLastname(e.target.value);
                      }}
                      required
                      className='form-control form-control-sm'
                      placeholder='Lastname'
                    />
                  </div>
                </div>

                {/* <div className='form-group mb-3'>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    value={username}
                    onChange={(e) => {
                      SetUsername(e.target.value);
                    }}
                    required
                    className='form-control form-control-sm'
                    placeholder='Username'
                  />
                </div> */}
                <div className='form-group mb-3'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => {
                      SetEmail(e.target.value);
                    }}
                    required
                    className='form-control form-control-sm'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group mb-3'>
                  <PhoneInput
                    inputExtraProps={{
                      name: 'phone',
                      required: true,
                    }}
                    className='form-control form-control-sm'
                    country={'in'}
                    value={phone}
                    onChange={(phone) => SetPhone(phone)}
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    required
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => {
                      SetPassword(e.target.value);
                    }}
                    className='form-control form-control-sm'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    required
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    value={confirm}
                    onChange={(e) => {
                      SetConfirm(e.target.value);
                    }}
                    className='form-control form-control-sm'
                    placeholder='Confirm password'
                  />
                </div>
                <div className='form-check mb-3'>
                  <input
                    className='form-check-input mt-2'
                    type='checkbox'
                    onChange={(e) => {
                      if (btnEnabled) {
                        setBtnEnabled(false);
                        setBtnClass('btn col-12 disabled');
                      } else {
                        setBtnEnabled(true);
                        setBtnClass('btn col-12');
                      }

                      console.log(btnEnabled);
                    }}
                    id='agree'
                  />

                  <label className='form-check-label' htmlFor='agree'>
                    I agree to the processing of personal data and accept the
                    terms of the use aggreement
                  </label>
                </div>
                <button type='submit' className={btnClass}>
                  Sign Up
                </button>
              </fieldset>
            </form>

            <div className='text-center'>
              <span>or</span>
              <h6>Already have an account</h6>
              <button
                onClick={() => ToggleSignIn()}
                className={'btn btn-outline-secondary btn-sm'}
              >
                Log In
              </button>
            </div>
          </div>
        )}

        {showSignIn && (
          <div>
            {signin_alert && (
              <div className='alert alert-success' role='alert'>
                Successfully Logged In...
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                SignInSubmit(e);
              }}
            >
              <fieldset>
                <legend className='d-flex justify-content-between align-items-center mb-3'>
                  <h2>Log In</h2>
                  <button
                    onClick={() => {
                      props.showModalBtn(false);
                    }}
                    className='btn'
                  >
                    <i className='fas fa-times fa-2x'></i>
                  </button>
                </legend>
                <div className='form-group mb-3'>
                  <input
                    type='email'
                    name='SignInEmail'
                    id='signinemail'
                    value={SignInEmail}
                    onChange={(e) => {
                      SetSignInEmail(e.target.value);
                    }}
                    required
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    required
                    type='password'
                    name='SignInPassword'
                    id='signinpassword'
                    value={SignInPassword}
                    onChange={(e) => {
                      SetSignInPassword(e.target.value);
                    }}
                    className='form-control'
                    placeholder='Password'
                  />
                </div>
                <button type='submit' className={'btn col-12'}>
                  Log In
                </button>
              </fieldset>
            </form>

            <div className='text-center'>
              <span>or</span>
              <h6>Don't have an account</h6>
              <button
                onClick={() => ToggleSignUp()}
                className={'btn btn-outline-secondary btn-sm'}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;
