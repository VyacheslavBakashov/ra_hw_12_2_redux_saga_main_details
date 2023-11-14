import { createReducer } from 'redux-act';

import { ServiceTypes } from '../../types';
import { clearServicesState, setError, setLoading, setSelectedService, setServices } from '../actions';

type ServicesStateTypes = {
  services: ServiceTypes[];
  selectedService: Partial<ServiceTypes>;
  loading: boolean;
  error: boolean;
};

const initialState: ServicesStateTypes = {
  services: [],
  selectedService: {},
  loading: false,
  error: false,
};

export const servicesReducer = createReducer<ServicesStateTypes>({}, initialState)
  .on(setServices, (state, payload) => {
    return { ...state, services: payload };
  })
  .on(setSelectedService, (state, payload) => {
    return { ...state, selectedService: payload };
  })
  .on(setLoading, (state, payload) => {
    return { ...state, loading: payload };
  })
  .on(setError, (state, payload) => {
    return { ...state, error: payload };
  })
  .on(clearServicesState, () => {
    return { ...initialState };
  });