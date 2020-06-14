// constants
import { SET_OFFER_VALUE, SET_USER_ID, SET_USER } from "../static/constants/index";


const initialState = {
    offer: {},
    userId: null,
    user: {}
};

export function offerValueReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OFFER_VALUE:
            return { ...state, offer: action.payload };
        case SET_USER_ID:
            return {...state, userId: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
}
