import Api from './api';

const signin = async (email: string, password: string) => {
  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await Api.signin(email, password);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } catch (e) {
    console.error(e);
  }
};

export default signin;
