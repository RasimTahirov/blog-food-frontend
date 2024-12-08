import React, { ReactNode } from 'react';
import { Button, Result } from 'antd';

interface ErrorProps {
  subTitle: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ subTitle }) => {
  const handleReload = () => {
    location.reload();
  };

  return (
    <Result
      status="error"
      title="Ошибка"
      subTitle={subTitle}
      extra={[
        <Button className="custom-button-white" onClick={handleReload}>
          Обновить
        </Button>,
      ]}
    />
  );
};

export default Error;
