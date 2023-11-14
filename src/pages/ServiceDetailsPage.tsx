import { Alert, Button, Descriptions, DescriptionsProps, Spin } from 'antd';
import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { clearServicesState, getServiceById } from '../redux/actions';

export const ServiceDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedService, loading, error } = useAppSelector((s) => s.services);
  const { id } = useParams<{ id: string }>();

  const { name, price, content } = selectedService;
  const items = useMemo(() => {
    return [
      { key: 1, label: 'Услуга', children: name },
      { key: 2, label: 'Цена', children: price },
      { key: 3, label: 'Описание', children: content },
    ] as DescriptionsProps['items'];
  }, [name, price, content]);

  const retryRequest = useMemo(() => {
    return () => dispatch(getServiceById(id));
  }, [id, dispatch]);

  useEffect(() => {
    id && dispatch(getServiceById(id));
  }, [id, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearServicesState());
    };
  }, [dispatch]);

  return (
    <div>
      <Spin spinning={loading} size="large">
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
          <Descriptions title="Детали услуги" bordered items={items} layout="vertical" />
        )}
      </Spin>
    </div>
  );
};