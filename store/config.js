import { applyMiddleware, createStore } from 'redux';
import {offerValueReducer} from "../reducers/offerValue";
import logger from 'redux-logger'


export const store = createStore(offerValueReducer, applyMiddleware(logger));
