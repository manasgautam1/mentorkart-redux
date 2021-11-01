import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PasswordStrengthBar from 'react-password-strength-bar';

import { signIn } from '../../redux/actions/loginActions';
import { signUp } from '../../redux/actions/loginActions';
import { useDispatch } from 'react-redux';

const SignInModal = (props) => {
  const dispatch = useDispatch();
  const [btnEnabled, setBtnEnabled] = useState(false);
  const [btnClass, setBtnClass] = useState('disabled');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [password, SetPassword] = useState('');
  const [confirm, SetConfirm] = useState('');
  const [firstname, SetFirstname] = useState('');
  const [lastname, SetLastname] = useState('');
  const [username, SetUsername] = useState('');

  const [SignInEmail, SetSignInEmail] = useState('');
  const [SignInPassword, SetSignInPassword] = useState('');

  const [signup_alert, SetSignupAlert] = useState(false);
  const [signin_alert, SetSigninAlert] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const ToggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const ToggleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const SignInSubmit = (e) => {
    dispatch(
      signIn({
        email: SignInEmail,
        password: SignInPassword,
      })
    );
  };
  const SignUpSubmit = (e) => {
    dispatch(
      signUp({
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
      })
    );
  };

  const [passwordType1, SetPasswordType1] = useState('password');
  const [passwordType2, SetPasswordType2] = useState('password');

  return (
    <div className='signup-modal'>
      <div className='modal-img d-lg-block d-none col-lg-6'>
        <img src='/images/signup-left.png' alt='' />
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
                  <h2>I am...</h2>
                  <button
                    onClick={() => {
                      props.showModalBtn(false);
                    }}
                    className='btn'
                  >
                    <i className='fas fa-times fa-2x'></i>
                  </button>
                </legend>
                <div className='d-md-flex d-none justify-content-between align-items-center mb-4'>
                  <div className='form-check radio-btn'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input '
                        name='optionsRadios'
                        id='Professional'
                        value='Professional'
                      />
                      Individual
                    </label>
                  </div>
                  <div className='form-check radio-btn'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input'
                        name='optionsRadios'
                        id='Professional'
                        value='Professional'
                      />
                      Professional
                    </label>
                  </div>
                  <div className='form-check radio-btn'>
                    <label className='form-check-label'>
                      <input
                        type='radio'
                        className='form-check-input'
                        name='optionsRadios'
                        id='Entrepreneur'
                        value='Entrepreneur'
                      />
                      Entrepreneur
                    </label>
                  </div>
                </div>
                <div className='d-md-none d-block mb-4'>
                  <select className='form-select'>
                    <option value='Student'>Student</option>
                    <option value='Professional'>Professional</option>
                    <option value='Entrepreneur'>Entrepreneur</option>
                  </select>
                </div>
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
                <div className='form-group mb-0'>
                  <div className='password-div'>
                    <input
                      required
                      type={passwordType1}
                      name='password'
                      id='password'
                      value={password}
                      onChange={(e) => {
                        SetPassword(e.target.value);
                      }}
                      className='form-control form-control-sm'
                      placeholder='Password'
                    />
                    <button
                      className='btn'
                      onClick={(e) => {
                        if (passwordType1 === 'password') {
                          SetPasswordType1('text');
                        } else {
                          SetPasswordType1('password');
                        }
                      }}
                    >
                      {passwordType1 === 'password' ? (
                        <i class='fas fa-eye'></i>
                      ) : (
                        <i class='fas fa-eye-slash'></i>
                      )}
                    </button>
                  </div>
                  <PasswordStrengthBar password={password} />
                </div>
                <div className='form-group mb-3'>
                  <div className='password-div'>
                    <input
                      required
                      type={passwordType2}
                      name='confirm-password'
                      id='confirm-password'
                      value={confirm}
                      onChange={(e) => {
                        SetConfirm(e.target.value);
                      }}
                      className='form-control form-control-sm'
                      placeholder='Confirm password'
                    />
                    <button
                      className='btn'
                      onClick={(e) => {
                        if (passwordType2 === 'password') {
                          SetPasswordType2('text');
                        } else {
                          SetPasswordType2('password');
                        }
                      }}
                    >
                      {passwordType2 === 'password' ? (
                        <i class='fas fa-eye'></i>
                      ) : (
                        <i class='fas fa-eye-slash'></i>
                      )}
                    </button>
                  </div>
                </div>
                <div className='form-check mb-3 align-items-end'>
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
                    I agree to terms and conditions
                  </label>
                </div>
                <div className='row px-2'>
                  <button type='submit' className='btn btn-dark'>
                    Get OTP
                  </button>
                </div>
              </fieldset>
            </form>

            <div className='text-center mt-2'>
              <h6>
                Already have an account ?
                <span
                  onClick={() => ToggleSignIn()}
                  className={'toggle-span ps-2'}
                >
                  Log In
                </span>
              </h6>
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
                <div className='row px-2'>
                  <button type='submit' className='btn btn-dark'>
                    Login
                  </button>
                </div>
              </fieldset>
            </form>

            <div className='text-center'>
              <span>or</span>
              <h6>
                Don't have an account ?
                <span
                  onClick={() => ToggleSignUp()}
                  className={'toggle-span ps-2'}
                >
                  Sign Up
                </span>
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
