import * as UserAPI from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = (userId) => (dispatch) =>
  UserAPI.fetchUser(userId).then((user) => dispatch(receiveUser(user)));

export const updateUser = (user) => (dispatch) =>
  UserAPI.updateUser(user).then((user) => dispatch(receiveUser(user)));
