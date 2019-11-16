export function listRequest() {
  return {
    type: '@meetup/LIST_REQUEST',
  };
}

export function listSuccess(meetups) {
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
