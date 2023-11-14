import { Alert, Button, Table } from 'antd';
import { FC, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { columns } from '../consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { clearServicesState, getAllServices } from '../redux/actions';
import { GetComponentProps, ServiceTypes } from '../types';

export const ServicesPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((s) => s.services);

  const onRow: GetComponentProps<ServiceTypes> = (v) => {
    return {
      onClick: () => navigate(`/${v.id}/details`),
    };
  };

  const retryRequest = useMemo(() => {
    return () => dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllServices());
    return () => {
      dispatch(clearServicesState());
    };
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <Alert
          message="Произошла ошибка!"
          type="error"
          action={
            <Button onClick={retryRequest} style={{ backgroundColor: '#383838', color: '#ffffff' }}>
              Повторить запрос
            </Button>
          }
        />
      ) : (
        <Table
          rowKey="id"
          dataSource={services}
          columns={columns.services()}
          onRow={onRow}
          loading={{ spinning: loading, size: 'large' }}
          pagination={false}
        />
      )}
    </div>
  );
};