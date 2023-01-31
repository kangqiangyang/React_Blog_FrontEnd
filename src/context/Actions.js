export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (userCredentials) => ({
  type: "LOGIN_SUCCESS",
  payload: userCredentials,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});
