import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/LIST_SUCCESS': {
        draft.meetups = action.payload.meetups;
        draft.loading = false;
        break;
      }
      case '@meetup/CREATE_REQUEST': {
        break;
      }
      case '@meetup/CREATE_SUCCESS': {
        break;
      }
      case '@meetup/UPDATE_REQUEST': {
        break;
      }
      case '@meetup/UPDATE_SUCCESS': {
        break;
      }

      case '@meetup/MEET_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
