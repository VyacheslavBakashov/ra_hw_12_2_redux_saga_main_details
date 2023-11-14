import { ColumnTypes, ServiceTypes } from './../types/index';

export const columns = {
  services: () => {
    return [
      { title: 'Услуга', dataIndex: 'name' },
      { title: 'Цена', dataIndex: 'price' },
    ] as ColumnTypes<ServiceTypes>[];
  },
};