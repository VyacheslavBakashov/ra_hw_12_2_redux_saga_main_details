import { AxiosResponse } from 'axios';

import { ServiceTypes } from '../types';
import { baseHost } from './index';

export const servicesAPI = {
  async getAll() {
    const res: AxiosResponse<ServiceTypes[]> = await baseHost.get('/services');
    return res;
  },
  async getById(id: string) {
    const res: AxiosResponse<ServiceTypes> = await baseHost.get(`/services/${id}`);
    return res;
  },
};
