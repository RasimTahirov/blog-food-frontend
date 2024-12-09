import { Spin } from 'antd';

const SpinLoading = () => {
  return (
    <div className="container-max h-full">
      <div className="grid items-center h-40">
        <Spin size="large" className="ant-spin-dot" />
      </div>
    </div>
  );
};

export default SpinLoading;
