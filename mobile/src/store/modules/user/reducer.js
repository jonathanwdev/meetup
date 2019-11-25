import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;

        break;
      }
      case '@user/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_SUCCESS': {
        draft.loading = false;
        draft.profile = action.payload;
        break;
      }
      default:
    }
  });
}