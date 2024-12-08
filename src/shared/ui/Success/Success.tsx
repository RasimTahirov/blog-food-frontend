import style from './index.module.scss';
import React, { useEffect, useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

interface SuccessProps {
  message: string;
}

const Success: React.FC<SuccessProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center">
      {visible && (
        <div className={style.success}>
          <div className="flex gap-2.5">
            <CheckCircleOutlined />
            <span>{message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
