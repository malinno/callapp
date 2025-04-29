import api from './api';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    user: {
      id: number;
      userName: string;
      email: string;
      roleName: string;
    };
    token: string;
  };
}

export const login = async ({ email, password }: LoginPayload) => {
  const response = await api.post<LoginResponse>('/Users/Login', {
    email,
    password,
  });

  const { token, user } = response.data.data;

  return {
    token,
    role: user.roleName?.toLowerCase(), // Admin → admin
    user,
  };
};
