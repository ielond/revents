import { createReducer } from "../../app/common/util/reducerUtils"
import { SIGNOUT_USER, LOGIN_USER } from "./authConstants"

const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (state, payload) => {
    return {
        authenticated: true,
        currentUser: payload.creds.email
    }
}

const signoutUser = () => {
    return {
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGNOUT_USER]: signoutUser
})