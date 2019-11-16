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

export function updateRequest() {
  return {
    type: '@meetup/UPDATE_REQUEST',
  };
}
export function updateSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_SUCCESS',
    payload: { meetup },
  };
}
export function deleteRequest(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  };
}
export function deleteSuccess() {
  return {
    type: '@meetup/DELETE_SUCCESS',
  };
}

export function meetFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
