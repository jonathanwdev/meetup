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

      case '@meetup/UPDATE_SUCCESS': {
        const meetupAtualizado = action.payload.meetup;
        const newlist = draft.meetups.filter(
          item => item.id !== meetupAtualizado.id
        );
        newlist.push(meetupAtualizado);
        draft.meetups = newlist;

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
