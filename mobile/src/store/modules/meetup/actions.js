export function listMeetupRequest(date, page) {
  return {
    type: '@meetup/LIST_REQUEST',
    payload: { date, page },
  };
}

export function listMeetupSuccess(meetups) {
  return {
    type: '@meetup/LIST_SUCCESS',
    payload: { meetups },
  };
}

export function meetFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
