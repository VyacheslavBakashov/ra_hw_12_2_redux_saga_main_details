import { combineReducers } from 'redux';

import { servicesReducer } from './services';

export const rootReducer = combineReducers({
  services: servicesReducer,
});