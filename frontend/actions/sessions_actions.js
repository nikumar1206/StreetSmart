import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

// thunk action creators

export const login = (user) => async (dispatch) => {
  try {
    let res = await SessionAPI.login(user);
    dispatch(receiveCurrentUser(res));
    return res;
  } catch (err) {
    dispatch(receiveSessionErrors(err.responseJSON));
  }
};
export const logout = () => async (dispatch) => {
  try {
    let res = await SessionAPI.logout();
    dispatch(logoutCurrentUser());
    return res;
  } catch (err) {
    dispatch(receiveSessionErrors(err.responseJSON));
  }
};

export const signup = (user) => async (dispatch) => {
  try {
    let res = await SessionAPI.signup(user);
    dispatch(receiveCurrentUser(res));
    return res;
  } catch (err) {
    dispatch(receiveSessionErrors(err.responseJSON));
  }
};

// export const login = (user) => (dispatch) =>
//   SessionAPI.login(user).then(
//     (user) => dispatch(receiveCurrentUser(user)),
//     (err) => dispatch(receiveSessionErrors(err.responseJSON))
//   );

// export const logout = () => (dispatch) =>
//   SessionAPI.logout().then(
//     () => dispatch(logoutCurrentUser()),
//     (err) => dispatch(receiveSessionErrors(err.responseJSON))
//   );

// export const signup = (user) => (dispatch) =>
//   SessionAPI.signup(user).then(
//     (user) => dispatch(receiveCurrentUser(user)),
//     (err) => dispatch(receiveSessionErrors(err.responseJSON))
//   );
