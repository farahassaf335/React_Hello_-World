import axiosClient from './axiosClient';

const login = async ({ username, password }) => {
  console.log(`[authService] Attempting login for user: ${username}`);
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.trim(),
        password: password.trim(),
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("[authService] Server response:", data);
      throw new Error(data.message || 'اسم المستخدم أو كلمة المرور غير صحيحة');
    }

    return data;
  } catch (error) {
    console.error('[authService] Login failed:', error.message);
    throw error;
  }
};

const register = async (userData) => {
  try {
    const response = await axiosClient.post(`/users/add`, userData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'حدث خطأ غير متوقع أثناء التسجيل';
    console.error("Registration failed:", message);
    throw new Error(message);
  }
};

const authService = {
  login,
  register,
};

export default authService;