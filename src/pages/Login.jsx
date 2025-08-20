import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../store/authSlice';

const loginSchema = yup.object().shape({
  username: yup.string().required('Please enter your username'),
  password: yup.string().required('Please enter your password'),
});

const Login = () => {
  const dispatch = useDispatch();
  const { status, error: authError } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" {...register('username')} />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register('password')} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>

          {authError && (
            <div className="error form-error">
              {typeof authError === 'string'
                ? authError
                : authError.message || 'Invalid username or password'}
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <button type="button" className="btn-secondary">Create Account</button>
      </div>
    </div>
  );
};

export default Login;
