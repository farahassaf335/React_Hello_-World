import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../store/authSlice';

const loginSchema = yup.object().shape({
  username: yup.string().required('الرجاء إدخال اسم المستخدم'),
  password: yup.string().required('الرجاء إدخال كلمة المرور'),
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
        <h2>تسجيل الدخول</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">اسم المستخدم</label>
            <input id="username" type="text" {...register('username')} />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">كلمة المرور</label>
            <input id="password" type="password" {...register('password')} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <a href="/forgot-password" className="forgot-password-link">
            نسيت كلمة المرور؟
          </a>

          {authError && (
            <div className="error form-error">
              {typeof authError === 'string'
                ? authError
                : authError.message || 'اسم المستخدم أو كلمة المرور غير صحيحة'}
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        <button type="button" className="btn-secondary">إنشاء حساب</button>
      </div>
    </div>
  );
};

export default Login;
