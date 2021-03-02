<<<<<<< HEAD
import { getUserTokenInfo, isAuthenticated, removeUser } from '../utils/auth'
import { login, register } from '../apis/auth'
import { fetchBookmarksForUser } from './listings'
=======
import {
  getUserTokenInfo,
  isAuthenticated,
  removeUser,
  saveUserToken,
} from "../utils/auth"
import { login, register } from "../apis/auth"
import { updateUserProfile } from "../apis/users"
>>>>>>> b6a14bc90ce4e6ffeac26da0c5d7c2e2570a8ba8

export function requestLogin() {
  return {
    type: "LOGIN_REQUEST",
    isFetching: true,
    isAuthenticated: false,
  }
}

export function receiveLogin(user) {
  return {
    type: "LOGIN_SUCCESS",
    isFetching: false,
    isAuthenticated: true,
    user,
  }
}

export function loginError(message) {
  return {
    type: "LOGIN_FAILURE",
    isFetching: false,
    isAuthenticated: false,
    message,
  }
}

export function loginUser(creds, confirmSuccess) {
  return (dispatch) => {
    console.log("testttttt")
    dispatch(requestLogin())
    return login(creds)
      .then((userInfo) => {
        console.log("test 3")
        dispatch(receiveLogin(userInfo))
        dispatch(fetchBookmarksForUser(userInfo.id))
        confirmSuccess()
      })
      .catch((err) => {
        dispatch(loginError(err))
      })
  }
}

export function requestLogout() {
  return {
    type: "LOGOUT_REQUEST",
    isFetching: true,
    isAuthenticated: true,
  }
}

export function receiveLogout() {
  return {
    type: "LOGOUT_SUCCESS",
    isFetching: false,
    isAuthenticated: false,
  }
}

export function logoutUser(confirmSuccess) {
  return (dispatch) => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
    confirmSuccess()
  }
}

export function registerUserRequest(creds, confirmSuccess) {
  return (dispatch) => {
    register(creds)
      .then((userInfo) => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch((err) => dispatch(loginError(err)))
  }
}

export function checkAuth(confirmSuccess) {
<<<<<<< HEAD
  return dispatch => {
    if(isAuthenticated()) {
      const userInfo = getUserTokenInfo()
=======
  return (dispatch) => {
    if (isAuthenticated()) {
>>>>>>> b6a14bc90ce4e6ffeac26da0c5d7c2e2570a8ba8
      dispatch(receiveLogin(getUserTokenInfo()))
      dispatch(fetchBookmarksForUser(userInfo.id))
      confirmSuccess()
    }
  }
}

<<<<<<< HEAD
export function setBookmarks (bookmarks) {
  return {
    type: 'SET_BOOKMARKS',
    bookmarks: bookmarks
=======
export function updateProfile(updatedProfile, confirmSuccess) {
  return (dispatch) => {
    updateUserProfile(updatedProfile)
      .then((details) => {
        saveUserToken(details.token)
        dispatch(checkAuth(confirmSuccess))
      })
      .catch((err) => dispatch(loginError(err)))
>>>>>>> b6a14bc90ce4e6ffeac26da0c5d7c2e2570a8ba8
  }
}
