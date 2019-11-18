export function listMeetupRequest() {
  return {
    type: '@meetup/LIST_REQUEST',
  };
}

export function listMeetupSuccess(meetups) {
  return {
    type: '@meetup/LIST_SUCCESS',
    payload: { meetups },
  };
}
export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { data },
  };
}
export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_SUCCESS',
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: { id, data },
  };
}
export function updateMeetupSuccess() {
  return {
    type: '@meetup/UPDATE_SUCCESS',
  };
}
export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  };
}
export function deleteMeetupSuccess() {
  return {
    type: '@meetup/DELETE_SUCCESS',
  };
}

export function meetFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
