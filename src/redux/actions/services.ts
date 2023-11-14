import { createAction } from 'redux-act';

import { ServiceTypes } from '../../types';

export const setServices = createAction<ServiceTypes[]>('SET_SERVICES', (services) => services);
export const setSelectedService = createAction<ServiceTypes>('SET_SELECTED_SERVICE', (service) => service);
export const setLoading = createAction<boolean>('SET_LOADING', (loading) => loading);
export const setError = createAction<boolean>('SET_ERROR', (error) => error);
export const clearServicesState = createAction('CLEAR_SERVICES_STATE');

export const getAllServices = createAction('GET_ALL_SERVICES');
export const getServiceById = createAction<string>('GET_SERVICE_BY_ID', (id) => id);