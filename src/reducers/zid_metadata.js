/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import * as types from "../actions";

const zid = (state = {
  loading: false,
  zid_metadata: {},
  error: null,
  optimistic: 0 /* `h4x0rz` trigger render because shallow comparison https://github.com/rackt/redux/issues/585 */
}, action) => {
  switch (action.type) {
  case types.REQUEST_ZID_METADATA:
    return Object.assign({}, state, {
      conversation_id: action.data.conversation_id,
      loading: true,
      error: null
    });
  case types.RECEIVE_ZID_METADATA:
    return Object.assign({}, state, {
      loading: false,
      zid_metadata: action.data,
      error: null
    });
  case types.ZID_METADATA_RESET:
    return Object.assign({}, state, {
      loading: false,
      zid_metadata: {},
      error: null
    });
  case types.OPTIMISTIC_ZID_METADATA_UPDATE:
    return Object.assign({}, state, {
      loading: false,
      zid_metadata: action.data,
      error: null,
      optimistic: Math.random()
    })
  case types.UPDATE_ZID_METADATA_STARTED:
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  case types.UPDATE_ZID_METADATA_SUCCESS:
    return Object.assign({}, state, {
      loading: false,
      zid_metadata: action.data,
      error: null
    });
  case types.UPDATE_ZID_METADATA_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.data
    });
  default:
    return state;
  }
};

export default zid;
