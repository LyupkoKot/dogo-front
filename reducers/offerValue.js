// constants
import { SET_OFFER_VALUE } from "../static/constants/index";


const initialState = {
    offer: {}
};

export function offerValueReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OFFER_VALUE:
            return { ...state, offer: action.payload };
        default:
            return state;
    }
}
