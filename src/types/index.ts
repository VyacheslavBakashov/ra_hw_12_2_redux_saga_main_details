import { ColumnType } from 'antd/lib/table';

export * from './services';

export type ColumnTypes<D> = {
  dataIndex: keyof D;
} & Omit<ColumnType<D>, 'dataIndex'>;

export type GetComponentProps<D> = (data: D, index?: number) => React.HTMLAttributes<HTMLElement>;