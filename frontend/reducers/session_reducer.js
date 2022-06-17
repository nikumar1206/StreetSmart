import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/sessions_actions";

const _nullUser = {
  id: null,
};

export const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action);
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign(_nullUser);
    default:
      return state;
  }
};
export default sessionReducer;
