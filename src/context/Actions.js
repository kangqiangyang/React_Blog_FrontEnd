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

export const UserDeleteSuccess = () => ({
  type: "USER_DELETE_SUCCESS",
});

export const UserDeleteFailure = () => ({
  type: "USER_DELETE_FAILURE",
});

export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
