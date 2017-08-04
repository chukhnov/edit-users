import { SHOW_SIGN_UP_FORM, SHOW_SIGN_IN_FORM } from '../common/constants'

const initialState = {
    showSignInForm: true,
    showSignUpForm: false
};

export default function applicationReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'USER_DATA':
            return {
                ...state,
                ...payload
            };
        case SHOW_SIGN_UP_FORM:{
            return {
                ...state,
                showSignUpForm: payload
            }
        }
        case SHOW_SIGN_IN_FORM:{
            return {
                ...state,
                showSignInForm: payload
            }
        }
        default:
            return state
    }
}