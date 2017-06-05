import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Alert from '../../../components/Alert';
import './Login.less';

class Login extends React.Component {

  login = (e) => {
    const { login } = this.props;
    e.preventDefault();
    login();
  }

  render() {
    const {
      hasError,
      isLoading,
      errorText,
      submitting,
    } = this.props.session;

    return (
      <form onSubmit={this.login}>
        <Alert
          testid='alert-loading'
          isVisible={isLoading}
        >
          Подождите...
        </Alert>
        <Alert
          testid='alert-error'
          id='qa-alert'
          isVisible={hasError}
          status='error'
        >
          { errorText }
        </Alert>
        <div className='form-group'>
          <Field
            name='username'
            id='qa-uname-input'
            component='input'
            type='text'
            placeholder='Логин'
            className='form-control b-login-input'
          />
        </div>
        <div className='form-group'>
          <Field
            name='password'
            id='qa-password-input'
            component='input'
            type='password'
            placeholder='Пароль'
            className='form-control b-login-input'
          />
        </div>
        <div className='text-right'>
          <button type='submit' disabled={submitting} className='btn btn-primary btn-login' id='qa-login-button'>
            Войти
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: `login`,
})(Login);
